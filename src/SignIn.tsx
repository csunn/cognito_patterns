// import React, { useState } from "react";
// import { Auth, auth0SignInButton } from "aws-amplify";
// import { TextField, Button, Heading } from "@aws-amplify/ui-react";
// import { Navigate } from "react-router-dom";

// const signIn = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handlesignIn = () => {

//     try { Auth.signIn(username, password)

//     }

//   };

//   return (
//     <form>
//       <TextField
//         name="username"
//         label="Username"
//         placeholder="Username"
//         onChange={(event) => setUsername(event.target.value)}
//       />

//       <TextField
//         name="password"
//         label="Password"
//         placeholder="Password"
//         type="password"
//         onChange={(event) => setPassword(event.target.value)}
//       />

//       <Button loadingText="" onClick={handlesignIn} ariaLabel="">
//         Sign In
//       </Button>
//     </form>
//   );
// };
