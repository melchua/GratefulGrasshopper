import { flow, types, getRoot } from "mobx-state-tree";
import AuthApi from "../services/api/auth";
// import awsmobile from "../../aws-exports";
// import Amplify from "aws-amplify";
// Amplify.configure(awsmobile);

const AuthStoreModel = types
  .model("Auth", {
    isChecking: types.optional(types.boolean, false)
  })
  .actions(self => {
    return {
      register: flow(function*(
        username = "default@default.com",
        password = "Test"
      ) {
        try {
          self.isChecking = true;
          console.warn("inside the flow", username);
          const response = yield AuthApi.register(username, password);
          console.warn(`this is the response: ${response}`);
          self.isChecking = false;
          return response;
        } catch (error) {
          console.warn("this is an error, ", error);
          return error;
        }
      })
    };
  });
export default AuthStoreModel;
