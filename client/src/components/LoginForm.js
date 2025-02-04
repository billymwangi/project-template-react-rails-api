import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
    if (response.ok) {
      response.json().then (onLogin)
    }else {
      response.json().then (console.log)
    }})

    // .then(data => console.log(data))
    // .catch(err => console.error(err));

  }

  return (
    <div>
    <h1 className="text-info text-center">Login here</h1>
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        name="email"
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        className="form-control"
        name="password"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        className="btn btn-outline-info"
        name="btn_login"
        value="Login"
        type="submit"
      />
      <a className="btn btn-link" href="/">
        Have no account? Register
      </a>
    </form>
    </div>
  );
}

export default LoginForm;
