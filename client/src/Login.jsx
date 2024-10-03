import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data == "success") {
          navigate("/");
        }
      })
      .catch((e) => console.log("theres some error", e));
  };
  return (
    <div>
      <h1>Login</h1>
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

export default Login;
