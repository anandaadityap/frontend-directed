import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CardCourse from "../components/CardCourse";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

function Course() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  //BUAT PROTECT
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h1>
          Pilih Kursus Yang <br />
          Kalian Inginkan
        </h1>
        <p>
          Kalian bisa memilih kursus yang kalian inginkan <br /> semua
          pembelajaran terkait programer terdapat disini.
        </p>
      </div>
      <div className="container mt-3">
        <div className="container text-center">
          <div className="row">
            <CardCourse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
