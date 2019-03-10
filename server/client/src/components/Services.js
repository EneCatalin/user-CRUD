import axios from "axios";

class UserService {
  deleteUser(id) {
    axios
      .get("http://localhost:5000/users/delete/" + id)
      .then(() => {
        console.log("User Deleted !!!");
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default UserService;
