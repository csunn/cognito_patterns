import { useState } from "react";
import { Auth } from "aws-amplify";
import { TextField, Button, Heading } from "@aws-amplify/ui-react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlesignIn = async () => {
    try {
      const response = await Auth.signIn(username, password);
      console.log(response);
      // ("/Home");
    } catch (error) {
      console.log("Sign In Successful", error.code);
    }
  };

  return (
    <form>
      <Heading level={1} fontWeight="bold">
        Sign In
      </Heading>
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <TextField
        name="password"
        label="Password"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button loadingText="" onClick={handlesignIn} ariaLabel="">
        Sign In
      </Button>
    </form>
  );
};

export default SignIn;
