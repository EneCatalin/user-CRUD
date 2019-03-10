import axios from "axios";

export default function userDelete(data) {
  console.log(data);
  axios
    .get("http://localhost:5000/users/delete/" + data)
    .then(() => {
      console.log("User Deleted !!!");
    })
    .catch(error => {
      console.log(error);
    });
}
