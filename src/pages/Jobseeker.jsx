import React from "react";
import Navbar from "../components/Navbar";
import CardJobseeker from "../components/CardJobseeker/CardJobseeker";

export default function Jobseeker() {
  return (
    <div>
      <Navbar />
      <div className="text-center container my-3">
        <h1>Pilih Pekerjaan Yang Kalian Inginkan</h1>
        <p>
          Kalian bisa memilih pekerjaan yang kalian inginkan <br /> semua
          pekerjaan terkait programer terdapat disini.
        </p>
        <CardJobseeker />
      </div>
    </div>
  );
}
