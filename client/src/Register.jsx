import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handlesubmit = () => {
    axios
      .post("http://localhost:3000/api/createuser", {
        email,
        userName,
        password,
      })
      .then(navigate("/login"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handlesubmit}>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            required
            name=""
            id="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label for="username">Username:</label>
          <input
            type="text"
            required
            name=""
            id="username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label for="pass">Password:</label>
          <input
            type="password"
            required
            name=""
            id="pass"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="d-grid gap-2">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
