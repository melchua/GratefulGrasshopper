// auth functions for AWS
import Auth from "@aws-amplify/auth";

const register = (username2, password2) => {
  const username = "test@m56studios.com";
  const password = "Password1234!";
  const email = "test@m56studios.com";
  console.warn(
    `in signup auth, here is username: ${username} ${email} ${password}`
  );
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
    // .then(data => console.warn(data)
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

const confirmSignUp = () => {
  Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true
  })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

// After retrieving the confirmation code from the user
const resendSignUp = username => {
  Auth.resendSignUp(username)
    .then(() => {
      console.log("code resent successfully");
    })
    .catch(e => {
      console.log(e);
    });
};

const AuthActions = {
  register,
  confirmSignUp,
  resendSignUp
};

export default AuthActions;
