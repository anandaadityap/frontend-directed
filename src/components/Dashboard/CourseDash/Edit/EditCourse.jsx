import React from "react";
import Navbar from "../../../Navbar";
import FormEditCourse from "./FormEditCourse";

function EditCourse() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormEditCourse />
      </div>
    </div>
  );
}

export default EditCourse;
