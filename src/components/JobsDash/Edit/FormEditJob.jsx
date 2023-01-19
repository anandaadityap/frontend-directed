import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function FormEditJob() {
  const [me, setMe] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [kualifikasi, setKualifikasi] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getJobsById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/jobseeker/${id}`
        );
        setName(response.data.name);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setKualifikasi(response.data.kualifikasi);
        setFile(response.data.image);
        setPreview(response.data.url);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getJobsById();
  }, [id]);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateJob = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/jobseeker/${id}`,
        {
          name: name,
          title: title,
          description: description,
          kualifikasi: kualifikasi,
          image: file,
        },
        { headers: { "Content-type": "multipart/form-data" } }
      );
      navigate(`/dashboardjob/${me.id}`);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const response = await axios.get(`http://localhost:5000/me`);
    setMe(response.data);
  };
  return (
    <div>
      <h1>Edit Job Vacancy</h1>
      <div className="row">
        <form
          className="col-6"
          onSubmit={updateJob}
        >
          <p className="text-sm-center text-danger">{msg}</p>
          <div className="mb-3">
            <label className="form-label">Nama Perusahaan</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Title Jobs</label>
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
            <label className="form-label">Kualifikasi</label>
            <input
              type="text"
              className="form-control"
              value={kualifikasi}
              onChange={(e) => setKualifikasi(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formFile"
              className="form-label"
            >
              Image Job Vacancy
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
