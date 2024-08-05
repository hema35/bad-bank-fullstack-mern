// login.js

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BankForm from "../components/BankForm";
import { useAuth } from "../context/UserContext";
import { Alert, Button, Card, Col, Row } from "react-bootstrap";

export default function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  async function handleLogin(data) {
    try {
      await login(data);
      setStatus("Login successful!");
    } catch (error) {
      setStatus(error.message);
      setTimeout(() => {
        setStatus("");
        navigate("/");
      }, 2000);
    }
  }

  function handleDemoLogin(email, password) {
    handleLogin({ email, password });
  }

  return (
    <>
      <h1 className="mb-4">Welcome back!</h1>
      <p>Enter your email and password to log in.</p>

      <BankForm
        bgcolor=""
        txtcolor="black"
        label="Login"
        handleClick={handleLogin}
        hideAmount={true}
        successButton="Login"
        isLoginForm={true}
        statusFromRequest={status}
      />

      <p>
        Don't have an account? <a href="/createaccount">Create one</a>
      </p>
    </>
  );
}
