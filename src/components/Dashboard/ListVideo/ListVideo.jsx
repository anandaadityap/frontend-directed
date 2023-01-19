import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

function ListVideo() {
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getVideo();
  }, [id]);

  const getVideo = async () => {
    const response = await axios.get(
      `http://localhost:5000/video/course/${id}`
    );
    console.log(response);
    setVideo(response.data);
  };

  const deleteVideo = async (videoId) => {
    await axios.delete(`http://localhost:5000/video/${videoId}`);
    getVideo();
  };
  return (
    <div className=" container">
      <NavLink to={`/createvideo/${id}`}>
        <button className="my-2 btn btn-sm btn-info">Create New Video</button>
      </NavLink>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Video</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {video.map((video, index) => (
            <tr key={video.uuid}>
              <th scope="row">{index + 1}</th>
              <td>{video.title_vid}</td>
              <td>{video.description_vid}</td>
              <td>{video.video}</td>
              <td>
                <NavLink to={`/editvideo/${video.uuid}`}>
                  <button className="my-2 btn btn-sm btn-secondary mx-2">
                    Edit
                  </button>
                </NavLink>
                <button
                  className="my-2 btn btn-sm btn-danger"
                  onClick={() => deleteVideo(video.uuid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListVideo;
