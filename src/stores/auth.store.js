import { observable } from "mobx";

class AuthStore {
  @observable auth = {};
}

export default new AuthStore();
