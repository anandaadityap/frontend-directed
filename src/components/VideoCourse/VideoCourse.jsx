import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export default function VideoCourse() {
  const [video, setVideo] = useState([]);
  const { id } = useParams();
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
      {video.map((video) => (
        <div key={video.uuid}>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{video.title_vid}</Accordion.Header>
              <Accordion.Body className="row">
                <div className="col">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.video}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>

                <p className="col">{video.description_vid}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </>
  );
}
