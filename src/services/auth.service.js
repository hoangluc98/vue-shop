import axios from "axios";

const urlSignIn = "http://localhost:3000/auth/signin";
const urlSignUp = "http://localhost:3000/auth/signup";

class AuthService {
    // Post Login
    // static postLogin(username, password) {
    //     return axios.post(urlSignIn, {
    //         username,
    //         password
    //     });
    // }

    /**
     * 
     * @param {Object} registerInfo 
     */
    static postRegister(registerInfo) {
        console.log(registerInfo)
        return axios.post(urlSignUp, registerInfo);
    }
}

export default AuthService;
