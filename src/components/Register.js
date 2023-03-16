import React, { useState, useEffect, useRef } from "react";
import "./registerStyle.css";
import InputField from "./FormFields";
import RegisterButton from "./RegisterButton";
import SignupName from "./signupName";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    setFirstName("");
    setLastName(" ");
    setEmail("");
    setPassword("")
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <SignupName formHeader="Signup/Register"/>
        <InputField
          label="First Name:"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          inputRef={inputRef}
        />
        <InputField
          label="Last Name:"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          label="Email:"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <InputField
          label="Password:"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      <RegisterButton name="submit"/>
      </form>
    </div>
  );
}

export default Form;
