import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FormCreateVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState("");
  const [video, setVideo] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  const createVideo = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/video`, {
        title_vid: title,
        description_vid: description,
        courseId: id,
        video: video,
      });
      navigate(`/videocourse/${id}`);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="container">
      <form
        className="col-6"
        onSubmit={createVideo}
      >
        <p className="text-sm-center text-danger">{msg}</p>
        <div className="mb-3">
          <label className="form-label">Title</label>
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
          <label className="form-label">Link Video</label>
          <input
            type="text"
            className="form-control"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormCreateVideo;
