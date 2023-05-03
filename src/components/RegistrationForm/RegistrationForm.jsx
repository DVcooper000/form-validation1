import React, { useState } from "react";
import "./RegistrationForm.css";
import SocialMediaButtons from "../SocialMediaButtons";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <h2 className="get-started">Get Started</h2>
      <p className="p">Already have an account?</p>
      <p className="p log-in">Log In</p>
      <SocialMediaButtons />
      <div className="or">
        <h3 className="ori">Or</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
