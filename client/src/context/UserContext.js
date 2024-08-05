import React, { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch("/account/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.log("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const navigate = useNavigate();
  const { user, setUser, fetchUserProfile } = useContext(UserContext);

  const login = async (data) => {
    console.log("application context")
    try {
      const response = await fetch("/account/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`Error: ${message}`);
      } else {
        const { accessToken } = await response.json();
        localStorage.setItem("token", accessToken);
        await fetchUserProfile(accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return {
    user,
    login,
    logout,
  };
};

export default UserContext;
