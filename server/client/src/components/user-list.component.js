import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = props => (
  <tr>
    <td>{props.user.id}</td>
    <td>{props.user.name}</td>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.website}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>Edit {"\u00A0\u00A0\u00A0"} </Link>
      <Link to={"/delete/" + props.user._id}>Delete</Link>
    </td>
  </tr>
);

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  UserList() {
    return this.state.users.map(function(currentUser, index) {
      return <User user={currentUser} key={index} />;
    });
  }

  render() {
    return (
      <div>
        <h3>User List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </tbody>
          <tbody>{this.UserList()}</tbody>
        </table>
      </div>
    );
  }
}
