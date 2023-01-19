import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FormEditVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [courseId, setCourseId] = useState("");
  const [video, setVideo] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getVideoById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/video/${id}`);
        setTitle(response.data.title_vid);
        setDescription(response.data.description_vid);
        setCourseId(response.data.courseId);
        setVideo(response.data.video);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getVideoById();
  }, [id]);

  const updateVideo = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/video/${id}`, {
        title_vid: title,
        description_vid: description,

        courseId: courseId,
        video: video,
      });
      navigate(`/videocourse/${courseId}`);
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
        onSubmit={updateVideo}
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
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input
            type="text"
            className="form-control"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
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

export default FormEditVideo;
