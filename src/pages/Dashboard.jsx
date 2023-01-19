import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { getMe } from "../features/authSlice";
import CardCourse from "../components/Dashboard/CourseDash/CardCourse";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  //BUAT PROTECT
  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <NavLink to={"/createcourse"}>
          <button className="ms-3 my-3 btn btn-sm btn-info">
            Create New Course
          </button>
        </NavLink>
        <CardCourse />
      </div>
    </div>
  );
}

export default Dashboard;
