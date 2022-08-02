import React, { useState } from "react";
import { Auth, Amplify } from "aws-amplify";
import {
  TextField,
  Button,
  Heading,
  PhoneNumberField,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

/* aws-exports configures cognito and allows connection to aws amplify within my aws account*/
import awsExports from "aws-exports";

// import Home from "Home"; //*importing our homepage attributes from Home.tsx

Amplify.configure(awsExports); // setting up the various AWS resources that we want to work with

// storing function using const instead of function()
// makes function immutable & allows for fat arrow syntax
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          // first_name,
          // last_name,
          email,
        },
      });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // const listenToAutoSignInEvent=() =>{
  //   Hub.listen("auth", ({payload})) => {
  //     const { event } = payload;
  //     if (event == "autoSignIn") {
  //       const user = payload.data;
  //     }
  //   }
  // };

  return (
    <form>
      <Heading level={1} fontWeight="bold">
        Sign-Up
      </Heading>

      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        onChange={(event) => {
          // console.log(event.target.value); update username after every type change
          setUsername(event.target.value);
        }}
      />
      <TextField
        name="first_name"
        placeholder="First Name"
        label="First Name"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <TextField
        name="last_name"
        placeholder="Last Name"
        label="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        name="email"
        placeholder="Email"
        label="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <PhoneNumberField
        name="phone_number"
        defaultCountryCode="+1"
        label="Phone Number"
        placeholder="XXX-XXX-XXXX"
      />
      <TextField
        name="password"
        type="password"
        placeholder="Password"
        label="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        name="comfirm_password"
        type="password"
        placeholder="Confirm Password"
        label="Confirm Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button loadingText="" onClick={handleSubmit} ariaLabel="">
        Sign Up
      </Button>
    </form>
  );
};

export default App;

// import React, { useState } from "react";
// import { Auth, Amplify, Hub } from "aws-amplify";
// import {
//   TextField,
//   Button,
//   Heading,
//   PhoneNumberField,
//   withAuthenticator,
// } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";

// import awsExports from "aws-exports";

// import Home from "Home";
// import "@aws-amplify/ui-react/styles.css";
// Amplify.configure(awsExports);

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     Auth.signIn(username);
//   };
//   <form>
//     <TextField
//       name="username"
//       placeholder="Username"
//       label="Username"
//       onChange={(event) => {
//         console.log(event.target.value);
//         setUsername(event.target.value);
//       }}
//     />
//     <TextField
//       name="password"
//       type="password"
//       placeholder="Password"
//       label="Password"
//     />

//     <Button loadingText="" onClick={handleSubmit} ariaLabel="">
//       Sign In
//     </Button>
//   </form>;
// };

// export default App;

// import { Amplify } from "aws-amplify";
// import { Authenticator } from "@aws-amplify/ui-react";

// import awsExports from "aws-exports";

// Amplify.configure(awsExports);

// const formFields = {
//   signIn: {
//     username: {
//       labelHidden: false,
//       placeholder: "username",
//       isRequired: true,
//       label: "Username:",
//     },
//   },
// };

// export default function App() {
//   return (
//     <Authenticator formFields={formFields}>
//       {({ signOut }) => <button onClick={signOut}>Sign out</button>}
//     </Authenticator>
//   );
// }
