import { Api } from "./configAxiosDefault";

let accessToken = localStorage.getItem('accessToken');
Api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

class UserService {
  static async getUsers() {
    let res = await Api.get("/users");
    return res.data;
  }

  static deleteUser(id) {
    return Api.delete(`/users/${id}`);
  }
}

export default UserService;
