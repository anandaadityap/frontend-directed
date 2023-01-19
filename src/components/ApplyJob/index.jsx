import React from "react";
import Navbar from "../Navbar";
import FormApply from "./FormApply";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormApply />
      </div>
    </div>
  );
}
