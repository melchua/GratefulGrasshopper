// auth functions for AWS
import Auth from "@aws-amplify/auth";

const register = (username, password) => {
  const email = username;
  console.warn(`in signup auth, here is username: ${username}`);
  Auth.signUp({
    username,
    password,
    attributes: {
      email // optional
    },
    validationData: [] //optional
  })
    .then(data => {
      console.warn(data);
      return true;
    })
    .catch(err => {
      console.warn(err);
      return false;
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
