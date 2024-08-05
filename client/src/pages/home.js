import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
          <img
            className="rounded-lg-3"
            src="images/bad-bank.jpg"
            alt="Bad Bank"
            width="720"
          />
        </div>
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">One Bank One Solution</h1>
          <p className="lead">
            Single solution for all your needs. Detailed transactions on single click.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            {!user ? (
              <>
                <Link
                  to="/createaccount"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
