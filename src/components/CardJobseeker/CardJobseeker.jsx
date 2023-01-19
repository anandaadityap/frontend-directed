import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

export default function CardJobseeker() {
  const [jobs, setJob] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    const response = await axios.get("http://localhost:5000/jobseeker");
    setJob(response.data);
  };
  return (
    <div>
      {jobs.map((jobs) => (
        <div
          className="col-md"
          key={jobs.id}
        >
          <div className="card m-4 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={jobs.url}
                  className="img-fluid rounded-start"
                  alt="Job"
                  width={500}
                  height={100}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start">
                  <h3 className="card-title fw-bold">{jobs.name}</h3>
                  <p className="card-text">{jobs.description}</p>
                  <h5>Kualifikasi</h5>
                  <p className="card-text">{jobs.kualifikasi}</p>
                  <NavLink to={`/applyjob/${jobs.id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Apply Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
