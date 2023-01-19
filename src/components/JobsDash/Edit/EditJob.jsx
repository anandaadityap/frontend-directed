import React from "react";
import Navbar from "../../Navbar";
import FormEditJob from "./FormEditJob";

export default function EditJob() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormEditJob />
      </div>
    </div>
  );
}
