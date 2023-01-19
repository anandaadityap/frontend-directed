import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [jobs, setJob] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getJobs();
  }, [id]);
  const getJobs = async () => {
    const response = await axios.get(
      `http://localhost:5000/jobseeker/user/${id}`
    );
    console.log(response);
    setJob(response.data);
  };
  const deleteJobs = async (jobId) => {
    await axios.delete(`http://localhost:5000/jobseeker/${jobId}`);
    getJobs();
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
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-outline-danger mx-3"
                      onClick={() => deleteJobs(jobs.uuid)}
                    >
                      Delete
                    </button>
                    <NavLink to={`/EditJob/${jobs.uuid}`}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </NavLink>
                    <NavLink to={`/ListKandidat/${jobs.id}`}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Kandidat
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
