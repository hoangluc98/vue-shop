import axios from "axios";

const url = "http://localhost:3000/auth/signin";

class AuthService {
    // Post Login
    static postLogin(username, password) {
        return axios.post(url, {
            username,
            password
        });
    }
}

export default AuthService;
