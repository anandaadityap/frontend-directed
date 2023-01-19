import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormCreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [level, setLevel] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/course`,
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
      <h1>Create Course</h1>
      <div className="row">
        <form
          className="col-6"
          onSubmit={saveCourse}
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
          <div class="mb-3">
            <label
              HtmlFor="formFile"
              class="form-label"
            >
              Image Course
            </label>
            <input
              class="form-control"
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

export default FormCreateCourse;
