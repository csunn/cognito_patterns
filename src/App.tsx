import { Fragment } from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import Register from "Register";
import awsExports from "aws-exports";
import ConfirmSignUp from "ConfirmSignUp";
import Home from "Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Fragment>
      <ConfirmSignUp />
      <Register />
    </Fragment>
  );
};

export default App;
