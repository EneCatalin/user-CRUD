import React, { Component } from "react";
import axios from "axios";

export default class DeleteUser extends Component {
  deleteUser() {
    axios.delete(
      "http://localhost:5000/users/delete/" + this.props.match.params.id
    );
  }
}
