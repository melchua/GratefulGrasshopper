// auth functions for AWS
import Auth from "@aws-amplify/auth";

export const signUp = () => {
  const username = "mel.chua@m56studios.com";
  const password = "Password1234!";
  const email = "mel.chua@m56studios.com";
  Auth.signUp({
    username,
    password,
    attributes: {
      email // optional
      // phone_number // optional - E.164 number convention
      // other custom attributes
    },
    validationData: [] //optional
  })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export const confirmSignUp = () => {
  Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true
  })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

// After retrieving the confirmation code from the user
export const resendSignUp = username => {
  Auth.resendSignUp(username)
    .then(() => {
      console.log("code resent successfully");
    })
    .catch(e => {
      console.log(e);
    });
};
