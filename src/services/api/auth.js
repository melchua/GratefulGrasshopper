// auth functions for AWS
import Auth from "@aws-amplify/auth";

const register = (username, password) => {
  const email = username;
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

const signIn = (username, password) => {
  const user = Auth.signIn(username, password);
  return user;
};

const currentAuthenticatedUser = () => {
  return Auth.currentAuthenticatedUser({
    bypassCache: false
  });
};

const signOut = () => {
  return Auth.signOut();
};

const AuthActions = {
  register,
  confirmSignUp,
  resendSignUp,
  signIn,
  signOut,
  currentAuthenticatedUser
};

export default AuthActions;
