import React from "react";
import ListVideo from "../components/Dashboard/ListVideo/ListVideo";
import Navbar from "../components/Navbar";

function VideoCourse() {
  return (
    <div className="row">
      <Navbar />
      <div className="container">
        <ListVideo />
      </div>
    </div>
  );
}

export default VideoCourse;
