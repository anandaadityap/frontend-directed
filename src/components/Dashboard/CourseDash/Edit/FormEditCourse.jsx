import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FormEditCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getCourseById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/course/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setLevel(response.data.level);
        setFile(response.data.image);
        setPreview(response.data.url);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getCourseById();
  }, [id]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/course/${id}`,
        {
          title: title,
          description: description,
          level: level,
          image: file,
        },
        { headers: { "Content-type": "multipart/form-data" } }
      );
      navigate("/Dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1>Edit Course</h1>
      <div className="row">
        <form
          className="col-6"
          onSubmit={updateCourse}
        >
          <p className="text-sm-center text-danger">{msg}</p>
          <div className="mb-3">
            <label className="form-label">Title Course</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Level</label>
            <input
              type="text"
              className="form-control"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formFile"
              className="form-label"
            >
              Image Course
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={loadImage}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>

        {preview ? (
          <figure className="col figure-img img-fluid rounded ratio ratio-16x9">
            <img
              src={preview}
              alt="Preview Image"
            />
          </figure>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FormEditCourse;
