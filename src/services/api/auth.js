// auth functions for AWS
import Auth from "@aws-amplify/auth";

const register = (username, password) => {
  const email = username;
  //   console.warn(`in signup auth, here is username: ${username}`);
  return Auth.signUp({
    username,
    password,
    attributes: {
      email // optional
    },
    validationData: [] //optional
  });
};

const confirmSignUp = (username, code) => {
  console.warn("in the auth api", code);
  return Auth.confirmSignUp(username, code, { forceAliasCreation: true });
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
