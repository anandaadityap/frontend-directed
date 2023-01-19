import React from "react";
import Navbar from "../../../Navbar";
import FormCreateCourse from "./FromCreateVideo";

function CreateVideo() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Create Video</h1>
        <FormCreateCourse />
      </div>
    </div>
  );
}

export default CreateVideo;
