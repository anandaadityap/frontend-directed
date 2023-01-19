import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import headerImg from "../Images/gambar/gambar-home.png";
import { useDispatch } from "react-redux";

import { getMe } from "../features/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="container text-center mt-5">
        <div className="row align-items-center">
          <div className="col text-start ms-5 mb-3">
            <div className="container">
              <h2 className="mb-3">Tingkatkan Karirmu bersama kami. </h2>
              <p>
                Directed, membantumu untuk mencari pekerjaan
                <br /> sesuai bakat dan minat yang kamu miliki.
              </p>
              <NavLink to={`/course`}>
                <button
                  type="button"
                  className="btn btn-outline-primary mt-3"
                >
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
          <div className="col me-5 shadow">
            <img
              src={headerImg}
              alt="Teen"
              height={500}
              width={400}
            />
          </div>
        </div>
      </div>
      {/* End Header */}
      {/* Card Home*/}
      <div>
        <div className="container text-center mt-5">
          <h1>Pilih keinginnan kalian</h1>
          <p>Kalian ingin mengikuti kursus atau mencari pekerjaan</p>
        </div>
        <div className="container text-center mt-5 ">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3 ">
              <div className="card me-5 shadow-lg">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3>Course</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </p>
                  <NavLink to={"/course"}>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Get Started
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 ">
              <div className="card me-5 shadow-lg">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3>Jobseeker</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </p>
                  <NavLink to={"/jobseeker"}>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Get Started
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card Home*/}

      {/* Footer */}
      <footer className="bd-footer  mt-5 bg-light">
        <div className="container py-4 py-md-5 px-4 px-md-3">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <NavLink
                className="navbar-brand fw-bold fs-3"
                to="/"
              >
                Directed.
              </NavLink>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">
                  Designed and built with all the love in the world by the{" "}
                  <a href="/docs/5.2/about/team/">Bootstrap team</a> with the
                  help of{" "}
                  <a href="https://github.com/twbs/bootstrap/graphs/contributors">
                    our contributors
                  </a>
                  .
                </li>
                <li className="mb-2">Code licensed .</li>
                <li className="mb-2">Currently v5.2.2.</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="nav-item   mb-2">
                  <NavLink
                    className="nav-link  btn-light"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item   mb-2">
                  <NavLink
                    className="nav-link  btn-light"
                    aria-current="page"
                    to={"/"}
                  >
                    Course
                  </NavLink>
                </li>
                <li className="nav-item   mb-2">
                  <NavLink
                    className="nav-link  btn-light"
                    aria-current="page"
                    to={"/"}
                  >
                    Jobseeker
                  </NavLink>
                </li>
                <li className="nav-item   mb-2">
                  <NavLink
                    className="nav-link  btn-light"
                    aria-current="page"
                    to={"/"}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
