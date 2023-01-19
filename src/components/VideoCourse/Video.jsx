import React from "react";

import Navbar from "../Navbar";
import VideoCourse from "./VideoCourse";

export default function Video() {
  return (
    <>
      <Navbar />

      <div className="container my-3">
        <VideoCourse />
      </div>
    </>
  );
}
