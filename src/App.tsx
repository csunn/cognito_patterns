/* import by name */
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator, CheckboxField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/* aws-exports configures cognito and allows connection to aws amplify within my aws account*/
import awsExports from 'aws-exports'; 

import Home from "Home"; //*importing our homepage attributes from Home.tsx

Amplify.configure(awsExports); // setting up the various AWS resources that we want to work with


const formFields = {
   signUp: {
    username: {
      order: 1,
      placeholder: "Username"
    },
     email: {
       order:1
     },
     first_name: {
       order: 2,
       placeholder: 'First Name'
     },
     last_name: {
      order: 3,
      placeholder: 'Last Name'
     },
     password: {
       order: 4
     },
     confirm_password: {
       order: 5
     },
   },
  }

const App = () => {
  return (
    <Authenticator 
      initialState="signIn" 
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();

            return (
              
              <>

                <Authenticator.SignUp.FormFields/>


                <CheckboxField
                  errorMessage={validationErrors.acknowledgement as string}
                  hasError={!!validationErrors.acknowledgement}
                  name="acknowledgement"
                  value="yes"
                  label="I agree with the Terms & Conditions."
                />
              </>
            );
          },
        },
      }}
      formFields={formFields}
      

      services={{ 
        async validateCustomSignUp(formData) {
          if (!formData.acknowledgement) {
            return {
              acknowledgement: 'You must agree to the Terms & Conditions',
            };
          }
        },
      }}
    >


      {({ signOut, user }) => (
          <Home myUser={user} userSignout={signOut} />
      )}
    </Authenticator>
  );
}
export default App;
