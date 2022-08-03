import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { TextField, Button, Heading } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";

const ConfirmSignUp = () => {
  const [username, setUsername] = useState("");
  const [authCode, setAuthCode] = useState("");

  const confirmSignUp = async () => {
    try {
      const response = await Auth.confirmSignUp(username, authCode);
      console.log(response);
      // ("/Home");
    } catch (error) {
      console.log(
        "Verification code does not match. Please enter a valid verification code.",
        error.code
      );
    }
  };
  return (
    <form>
      <Heading>Confirm Sign-Up</Heading>

      <TextField
        name="username"
        label="Username"
        placeholder="Enter username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        name="authcode"
        label="Code"
        placeholder="Enter verification code"
        onChange={(event) => setAuthCode(event.target.value)}
      />
      <Button loadingText="" onClick={confirmSignUp} ariaLabel="">
        Confirm Sign Up
      </Button>
    </form>
  );
};

export default ConfirmSignUp;
