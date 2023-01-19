import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function CardCourse() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = async () => {
    const response = await axios.get("http://localhost:5000/course");
    setCourse(response.data);
  };

  const deleteCourse = async (courseId) => {
    await axios.delete(`http://localhost:5000/course/${courseId}`);
    getCourses();
  };
  return (
    <>
      {course.map((course) => (
        <div
          className="col-md-3"
          key={course.uuid}
        >
          <div
            className="card m-3 shadow"
            style={{ width: "17rem" }}
          >
            <img
              src={course.url}
              className="card-img-top"
              alt="Course"
              width={500}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p className="text-start fs-6">
                Level : <span className="fw-light">{course.level}</span>
              </p>
              <NavLink
                to={`/VideoCourse/${course.id}`}
                className="btn btn-sm btn-primary ms-2"
              >
                Video Course
              </NavLink>
              <NavLink
                className="btn btn-sm btn-secondary mx-2"
                to={`/editcourse/${course.uuid}`}
              >
                Edit
              </NavLink>
              <NavLink
                to="/Dashboard"
                className="btn btn-sm btn-danger "
                onClick={() => deleteCourse(course.uuid)}
              >
                Delete
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardCourse;
