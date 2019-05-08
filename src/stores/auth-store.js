import { flow, types } from "mobx-state-tree";

/* 
    isChecking - for when it's authorizing async

*/

const AuthStoreModel = types
  .model("Auth", {
    isChecking: types.optional(types.boolean, false)
  })
  .actions(self => {
    return {
      register: flow(function*(email, password) {
        try {
          const response = 3;
        } catch (error) {
          return error;
        }
      })
    };
  });
export default AuthStoreModel;
