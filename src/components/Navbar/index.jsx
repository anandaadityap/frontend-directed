import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import axios from "axios";

function Navbar() {
  const [me, setMe] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const response = await axios.get(`http://localhost:5000/me`);
    setMe(response.data);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <NavLink
          to={"/"}
          className="navbar-brand fw-bold fs-3"
          aria-current="page"
        >
          Directed.
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to={"/course"}
            >
              Courses
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to={`/jobseeker`}
            >
              Jobseeker
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>

        <form className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isSuccess && (
              <li className="nav-item">
                <strong className="p-3">Welcome, {user && user.name}</strong>
              </li>
            )}
            {user && user.role === "admin" && (
              <li className="nav-item">
                <NavLink
                  className="btn btn-sm active text-primary mx-2"
                  aria-current="page"
                  to={"/Dashboard"}
                >
                  Dashboard Course
                </NavLink>
              </li>
            )}
            {user && user.role === "company" && (
              <li className="nav-item">
                <NavLink
                  className="btn btn-sm active text-primary mx-2"
                  aria-current="page"
                  to={`/DashboardJob/${me.id}`}
                >
                  Dashboard Jobseeker
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              {isSuccess && (
                <button
                  className="btn btn-sm  active text-danger mx-2"
                  aria-current="page"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </form>
        {!isSuccess && (
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="btn btn-sm text-primary active mx-2"
                  aria-current="page"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="btn btn-sm text-secondary active"
                  aria-current="page"
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
