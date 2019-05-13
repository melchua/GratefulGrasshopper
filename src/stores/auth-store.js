import { flow, types, getRoot } from "mobx-state-tree";
import AuthApi from "../services/api/auth";
// import awsmobile from "../../aws-exports";
// import Amplify from "aws-amplify";
// Amplify.configure(awsmobile);

const AuthStoreModel = types
  .model("Auth", {
    isChecking: types.optional(types.boolean, false),
    needsToConfirm: types.optional(types.boolean, false)
  })
  .actions(self => {
    return {
      register: flow(function*(
        username = "default@default.com",
        password = "Test"
      ) {
        try {
          self.isChecking = true;
          const response = yield AuthApi.register(username, password);
          self.isChecking = false;
          return response && true;
        } catch (error) {
          return error;
        }
      }),
      confirm: flow(function*(username, code) {
        try {
          const response = yield AuthApi.confirmSignUp(username, code);
          return response && true;
        } catch (error) {
          return error;
        }
      }),
      signIn: flow(function*(username, password) {
        try {
          const user = yield AuthApi.signIn(username, password);
          return user;
        } catch (error) {
          return error;
        }
      }),
      setConfirmationRequired() {
        self.needsToConfirm = true;
      },
      resetConfirmationRequired() {
        self.needsToConfirm = false;
      }
    };
  });
export default AuthStoreModel;
