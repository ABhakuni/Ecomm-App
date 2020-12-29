import React, { useState } from "react";
import "./loginlayout.css";
import { FormLabel, FormControl, FormGroup, Button } from '@material-ui/core';

export default function LoginLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup size="lg" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup size="lg" controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </form>
    </div>
  );
}