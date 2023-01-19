import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <div
        className="container frame shadow-lg p-5 my-5 "
        style={{ width: "400px" }}
      >
        {/* <!-- Pills content --> */}
        <div className="fw-bold mb-5">
          <NavLink
            to="/"
            className="navbar-brand "
          >
            <h1>Directed.</h1>
          </NavLink>
          <hr />
        </div>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={Auth}>
              {isError && (
                <p className="text-sm-center text-danger">{message}</p>
              )}
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  // type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="loginName"
                  className="form-control"
                />
                <label
                  className="form-label"
                  htmlFor="loginName"
                >
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="loginPassword"
                  className="form-control"
                />
                <label
                  className="form-label"
                  htmlFor="loginPassword"
                >
                  Password
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <NavLink to="/register">Register</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
