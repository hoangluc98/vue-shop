import { Api } from "./configAxiosDefault";

let accessToken = localStorage.getItem('accessToken');
Api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

class UserService {
  static getUsers() {
    return Api.get("/users");
  }

  static uploadUsers(formData) {
    return Api.post("/users", formData);
  }

  static deleteUser(id) {
    return Api.delete(`/users/${id}`);
  }
}

export default UserService;
