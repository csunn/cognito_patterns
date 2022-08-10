import { Fragment } from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import Register from "Register";
import awsExports from "aws-exports";
import ConfirmSignUp from "ConfirmSignUp";
import SignIn from "SignIn";
import ForgotPassword from "ForgotPassword";
import ResetPassword from "ResetPassword";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Fragment>
      <Register />
      <ConfirmSignUp />
      <SignIn />
      <ForgotPassword />
      <ResetPassword />
    </Fragment>
  );
};

export default App;
