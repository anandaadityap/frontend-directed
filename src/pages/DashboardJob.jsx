import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import JobsDash from "../components/JobsDash";

export default function DashboardJob() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Dashboard Jobs</h1>
        <NavLink to={"/createjob"}>
          <button className="ms-3 my-3 btn btn-sm btn-info">
            Create New Job Vacancy
          </button>
        </NavLink>
        <JobsDash />
      </div>
    </div>
  );
}
