import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeUserLegalName = this.onChangeUserLegalName.bind(this);
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserWebsite = this.onChangeUserWebsite.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user_id: "",
      user_legalName: "",
      user_username: "",
      user_email: "",
      user_phone: "",
      user_website: ""
    };
  }

  onChangeUserId(e) {
    this.setState({
      user_id: e.target.value
    });
  }

  onChangeUserLegalName(e) {
    this.setState({
      user_legalName: e.target.value
    });
  }

  onChangeUserUsername(e) {
    this.setState({
      user_username: e.target.value
    });
  }

  onChangeUserEmail(e) {
    this.setState({
      user_email: e.target.value
    });
  }

  onChangeUserPhone(e) {
    this.setState({
      user_phone: e.target.value
    });
  }

  onChangeUserWebsite(e) {
    this.setState({
      user_website: e.target.value
    });
  }

  onSubmit(e) {
    //we handle the submit logic with react
    e.preventDefault();

    console.log(`Form submitted: `);
    console.log(`User id: ${this.state.user_id}`);
    console.log(`User legal name: ${this.state.user_legalName}`);
    console.log(`User username: ${this.state.user_username}`);
    console.log(`User email: ${this.state.user_email}`);
    console.log(`User phone: ${this.state.user_phone}`);
    console.log(`User website: ${this.state.user_website}`);

    const newUser = {
      id: this.state.user_id,
      name: this.state.user_legalName,
      username: this.state.user_username,
      email: this.state.user_email,
      phone: this.state.user_phone,
      website: this.state.user_website
    };

    axios
      .post("http://localhost:5000/users/add/", newUser)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });

    this.setState({
      user_id: "",
      user_legalName: "",
      user_username: "",
      user_email: "",
      user_phone: "",
      user_website: ""
    });
  }

  render() {
    return (
      <div style={{ marginTOp: 20 }}>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Id:</label>
            <input
              type="number"
              className="form-control"
              value={this.state.user_id}
              onChange={this.onChangeUserId}
            />
          </div>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_legalName}
              onChange={this.onChangeUserLegalName}
            />
          </div>
          <div className="form-group">
            <label>User UserName:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_username}
              onChange={this.onChangeUserUsername}
            />
          </div>
          <div className="form-group">
            <label>User Email:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_email}
              onChange={this.onChangeUserEmail}
            />
          </div>

          <div className="form-group">
            <label>User Phone:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_phone}
              onChange={this.onChangeUserPhone}
            />
          </div>

          <div className="form-group">
            <label>User Website:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_website}
              onChange={this.onChangeUserWebsite}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
