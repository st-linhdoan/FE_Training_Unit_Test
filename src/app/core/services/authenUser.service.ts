import { AuthStorageService } from '../services/authStorage.service';

export default class AuthenUser {
    authenUser: AuthStorageService;

  constructor() {
    this.authenUser = new AuthStorageService();
  }

  signIn(token) {
    this.authenUser.setToken(token);
  }

  getUser() {
    this.authenUser.getToken();
  }

  signOut() {
    this.authenUser.removeToken();
  }
};
