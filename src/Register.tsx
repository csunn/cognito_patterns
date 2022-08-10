import { useState } from "react";
import { Auth, Amplify } from "aws-amplify";
import {
  TextField,
  Button,
  Heading,
  PhoneNumberField,
  Text,
} from "@aws-amplify/ui-react";
import awsExports from "aws-exports";
Amplify.configure(awsExports);

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setFirstName] = useState("");
  const [family_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      if (password != confirm_password) {
        setError("Passwords must match.");
        return;
      }
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          name,
          family_name,
          email,
        },
      });

      console.log(response);
      // ("/confirmRegister");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <Heading level={1} fontWeight="bold">
        Sign-Up
      </Heading>

      {error && <Text>{error}</Text>}

      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        name="name"
        placeholder="First Name"
        label="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        name="family_name"
        placeholder="Last Name"
        label="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
      <TextField
        name="email"
        placeholder="Email"
        label="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        name="confirm_password"
        type="password"
        placeholder="Confirm Password"
        label="Confirm Password"
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <Button loadingText="" onClick={handleSubmit} ariaLabel="">
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
