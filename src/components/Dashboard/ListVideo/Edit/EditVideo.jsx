import React from "react";
import FormEditVideo from "./FormEditVideo";
import Navbar from "../../../Navbar";

function EditVideo() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <FormEditVideo />
      </div>
    </div>
  );
}

export default EditVideo;
