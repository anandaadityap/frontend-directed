import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FormApply() {
  const [name, setName] = useState("");
  const [domisili, setDomisili] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [github, setGithub] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const loadCv = (e) => {
    const cv = e.target.files[0];
    setFile(cv);
    setPreview(URL.createObjectURL(cv));
  };

  const saveKandidat = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/kandidat`,
        {
          name: name,
          domisili: domisili,
          email: email,
          telp: telp,
          github: github,
          jobseekerId: id,
          cv: file,
        },
        { headers: { "Content-type": "multipart/form-data" } }
      );
      navigate(`/Jobseeker`);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1>Apply Job</h1>
      <div className="row">
        <form
          className="col-6"
          onSubmit={saveKandidat}
        >
          <p className="text-sm-center text-danger">{msg}</p>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Domisili</label>
            <input
              type="text"
              className="form-control"
              value={domisili}
              onChange={(e) => setDomisili(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nomer Telepon</label>
            <input
              type="text"
              className="form-control"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Github</label>
            <input
              type="text"
              className="form-control"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="formFile"
              className="form-label"
            >
              Masukan CV
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={loadCv}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => saveKandidat()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormApply;
