import { useState } from "react";
import { Auth } from "aws-amplify";
import { TextField, Button, Heading } from "@aws-amplify/ui-react";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await Auth.forgotPassword(username);
      console.log(response);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <form>
      <Heading level={1} fontWeight="bold">
        Forgot Password
      </Heading>

      <TextField
        name="username"
        label="Username"
        placeholder="Enter username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <Button loadingText="" onClick={handleForgotPassword} ariaLabel="">
        Forgot Password
      </Button>
    </form>
  );
};

export default ForgotPassword;
