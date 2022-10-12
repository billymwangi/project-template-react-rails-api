import React, { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    // .then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => onLogin(user));
    //     console.log(r);
    //   } else {
    //     r.json().then((err) => setErrors(err.errors));
    //   }
    // });
  }

  return (
    <div>
      <h1 className="text-info text-center">Register here</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="name"
          placeholder="Enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

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
          className="form-control"
          name="password"
          placeholder="Enter password"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />

        <input
          className="btn btn-outline-info"
          name="btn_login"
          value="Register"
          type="submit"
        />

        <a className="btn btn-link" href="/login">
          Have an account? Login
        </a>
      </form>
    </div>
  );
}

export default RegisterForm;
