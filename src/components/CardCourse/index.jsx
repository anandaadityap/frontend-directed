import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [course, setCourse] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [video, setVideo] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = async () => {
    const response = await axios.get("http://localhost:5000/course");
    setCourse(response.data);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getVideo();
  }, [id]);

  const getVideo = async () => {
    const response = await axios.get(
      `http://localhost:5000/video/course/${id}`
    );
    setVideo(response.data);
  };
  return (
    <>
      {course.map((course) => (
        <div className="col-md-3">
          <div
            className="card m-3 shadow"
            style={{ width: "17rem" }}
            key={course.uuid}
          >
            <img
              src={course.url}
              className="card-img-top"
              alt="Course.."
              width={500}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{course.title}</h5>

              <p className="text-start card-text">{course.description}</p>

              <p className="text-start fs-6">
                Level : <span className="fw-light">{course.level}</span>
              </p>
              <div className="text-start">
                <NavLink
                  to={`/video/${course.id}`}
                  className="btn btn-primary "
                >
                  Go Learn
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default index;
