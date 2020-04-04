import axios from "axios";

const urlSignIn = "http://localhost:3000/auth/signin";
const urlSignUp = "http://localhost:3000/auth/signup";

class AuthService {
  /**
   * User login
   * @param {string} email 
   * @param {string} password 
   */
  static postLogin(email, password) {
    return axios.post(urlSignIn, {
      email: email,
      password: password
    });
  }

  /**
   * User register
   * @param {Object} registerInfo 
   */
  static postRegister(registerInfo) {
    console.log(registerInfo)
    return axios.post(urlSignUp, registerInfo);
  }
}

export default AuthService;
