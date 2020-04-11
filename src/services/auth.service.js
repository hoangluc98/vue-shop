import { instance } from "./configAxiosDefault";

class AuthService {
  /**
   * User login
   * @param {string} email 
   * @param {string} password 
   */
  static async postLogin(email, password) {
    let res = await instance.post("/auth/signin", {
      email: email,
      password: password
    });
    instance.defaults.headers.common['Authorization'] = `Bearer ${res.accessToken}`;

    return res;
  }

  /**
   * User register
   * @param {Object} registerInfo 
   */
  static postRegister(registerInfo) {
    return instance.post("/auth/signup", registerInfo);
  }

  static getCurrentUser() {
    return instance.get("/auth/current-user");
  }
}

export default AuthService;
