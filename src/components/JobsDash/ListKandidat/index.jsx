import React from "react";
import Navbar from "../../Navbar";
import ListKandidat from "./TabelListKandidat";

export default function index() {
  return (
    <div>
      <Navbar />
      <div className="conatiner my-3">
        <ListKandidat />
      </div>
    </div>
  );
}
