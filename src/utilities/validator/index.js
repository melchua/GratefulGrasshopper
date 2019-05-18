// front-end validations for sign in / up forms

export const isUsernameFieldFilled = username => {
  if (username !== null && username.length > 0) {
    return true;
  } else return "Username/Email field cannot be empty";
};

export const isPasswordFieldFilled = password => {
  if (password !== null && password.length > 0) {
    return true;
  } else {
    return "Password field cannot be empty";
  }
};

export const doesPasswordContainCorrectNumberOfCharacters = password => {
  if (password !== null && password.length > 6) {
    return true;
  } else {
    return "Password must contain 6 or more characters";
  }
};

// not sure if these work yet... something with the match  test it
export const doesPasswordContainANumber = password => {
  const containsNumber = /[0-9]/;
  if (password !== null && password.match(containsNumber) !== null) {
    return true;
  } else {
    return "Password must contain at least 1 number";
  }
};

export const doesPasswordContainASymbol = password => {
  const containsSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  if (password !== null && password.match(containsSymbol) !== null) {
    return true;
  } else {
    return "Password must contain at least 1 symbol";
  }
};

export const doesPasswordContainCapitalLetter = password => {
  const containsSymbol = /[A-Z]/;
  if (password !== null && password.match(containsSymbol) !== null) {
    return true;
  } else {
    return "Password must contain at least 1 capital letter";
  }
};

export const doPasswordsMatch = (password, retypePassword) => {
  if (retypePassword !== null && password === retypePassword) {
    return true;
  } else {
    return "Passwords do not match";
  }
};
