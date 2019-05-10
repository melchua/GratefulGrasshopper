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
          //   console.warn(`this is the response: ${JSON.stringify(response)}`);
          self.isChecking = false;
          //   console.warn("ischecking inside mobx: ", self.isChecking);
          return response && true;
        } catch (error) {
          //   console.warn("this is an error, ", error);
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
