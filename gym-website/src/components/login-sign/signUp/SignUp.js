import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LogIn from "../login/LogIn";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || name.length<2) {
      alert("Please Enter Vailid Name");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your Email");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.trim() === "" || password.length<4) {
      alert("Please Enter More Than Four Characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    alert("Thank you for registering");
    setModal(false);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const [modal, setModal] = useState(true);
  const handleModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal ? (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Create Account</h1>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="text" onClick={handleModal}>
            Go To LoIn Page
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Sign Up
          </Button>
        </Box>
      ) : (
        <LogIn />
      )}
    </>
  );
}