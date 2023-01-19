import React from "react";
import Navbar from "../components/Navbar";
import ananda from "../Images/About/Ananda.jpeg";

function About() {
  return (
    <div className="">
      <Navbar />
      <div className="container my-5">
        <div className="card p-5 ">
          <div className="card-body row">
            <div className="col-8">
              <h1 className="fw-bold">Directed.</h1>
              <p className="text-muted ">
                Berawal dari banyaknya permasalahan terkait sumberdaya manusia
                terutama yang berkaitan dengan Teknologi.
                <br />
                Banyak industry masih membutuhkan banyak programer untuk
                memenuhi kebutuhan perusahaannya.
                <br />
                tetapi tidak banyak programmer yang memenuhi syarat untuk masuk
                kedalam industry tersebut.
                <br />
                Atas dasar permasalahan tersbut, kami disini menjembatani kalian
                untuk membantu kalian untuk mendapatkan pekerjaan yang berkaitan
                dengan teknologi.
                <br />
                Kalian juga disini bisa mencari kursus yang kalian inginkan
                untuk menambah pengetahuan anda.
              </p>
            </div>
            <div className="col-4 text-center">
              <img
                className="img-thumbnail rounded-circle shadow-lg"
                src={ananda}
                width={300}
                height={330}
                alt="FotoFounder"
              />
              <h4 className="fw-bold mt-3">Founder</h4>
              <p className="text-muted">Ananda Aditya Putra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
