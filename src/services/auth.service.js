import { Api } from "./configAxiosDefault";

class AuthService {
  /**
   * User login
   * @param {string} email 
   * @param {string} password 
   */
  static async postLogin(email, password, typeLogin) {
    let typeUrl;
    if (typeLogin === "admin") {
      typeUrl = "/auth/signin-admin";
    } else if (typeLogin === "user") {
      typeUrl = "/auth/signin";
    }

    let res = await Api.post(typeUrl, {
      email: email,
      password: password
    });
    
    Api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
    localStorage.setItem('accessToken', res.data.accessToken);
    return res;
  }

  /**
   * User register
   * @param {Object} registerInfo 
   */
  static postRegister(registerInfo) {
    return Api.post("/auth/signup", registerInfo);
  }

  static async getCurrentUser() {
    let res = await Api.get("/auth/current-user");
    return res.data;
  }
}

export default AuthService;
