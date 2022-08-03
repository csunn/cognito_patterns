import React from "react";
import { CognitoUserAmplify } from "@aws-amplify/ui";
type HomeProps = {
  // myUser: CognitoUserAmplify,
  userSignout?: () => void;
};
const Home = (props: HomeProps) => {
  const { userSignout } = props;

  return (
    <main>
      <h1>Hello!</h1>
      <button onClick={userSignout}>Sign out</button>
    </main>
  );
};

export default Home;
