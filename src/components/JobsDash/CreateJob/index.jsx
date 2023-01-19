import React from "react";
import Navbar from "../../Navbar";
import FormCreateJob from "./FormCreateJob";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormCreateJob />
      </div>
    </div>
  );
}
