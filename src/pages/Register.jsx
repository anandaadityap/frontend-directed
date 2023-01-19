import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div
      className="container frame shadow-lg p-5 mb-5 "
      style={{ width: "400px" }}
    >
      <div className="fw-bold mb-5">
        <NavLink
          to="/"
          className="navbar-brand "
        >
          <h1>Directed.</h1>
        </NavLink>
        <hr />
      </div>

      <form onSubmit={saveUser}>
        <p className="text-sm-center text-danger">{msg}</p>

        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="form-label"
            htmlFor="registerName"
          >
            Name
          </label>
        </div>

        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="form-label"
            htmlFor="registerEmail"
          >
            Email
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            className="form-label"
            htmlFor="registerPassword"
          >
            Password
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <label
            className="form-label"
            htmlFor="registerPassword"
          >
            Confirm Password
          </label>
        </div>

        {/* <!-- Checkbox --> */}
        <div className="mb-2 ">
          <select
            class="form-select"
            aria-label="Default select example"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option selected>Select Role</option>
            <option value="user">User</option>
            <option value="company">Company</option>
          </select>
          <label
            className="form-label"
            htmlFor="registerPassword"
          >
            Pilih Role
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
        >
          Register
        </button>
      </form>

      <div className="text-center mt-5  ">
        <p>
          You have account <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Registe;
