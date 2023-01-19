import React from "react";
import Navbar from "../../../Navbar";
import FormCreateCourse from "./FormCreateCourse";

function CreateCourse() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormCreateCourse />
      </div>
    </div>
  );
}

export default CreateCourse;
