import React, { Component } from "react";
import axios from "axios";

export default class EditTodo extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          user_id: response.data.id,
          user_legalName: response.data.name,
          user_username: response.data.username,
          user_email: response.data.email,
          user_phone: response.data.phone,
          user_website: response.data.website
        });
        console.log(response.data.phone);
        console.log(response.data.website);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeUserId(e) {
    this.setState({
      user_id: e.target.value
    });
  }

  onChangeUserLegalName(e) {
    console.log(e.target.value);
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
    e.preventDefault();
    const obj = {
      user_id: this.state.id,
      user_legalName: this.state.name,
      user_username: this.state.username,
      user_email: this.state.email,
      user_phone: this.state.phone,
      user_website: this.state.website
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:5000/users/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    // this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3 align="center">Update User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>ID: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.user_id}
              onChange={this.onChangeUserId}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_legalName}
              onChange={this.onChangeUserLegalName}
            />
          </div>
          <div className="form-group">
            <label>UserName: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_username}
              onChange={this.onChangeUserUsername}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_email}
              onChange={this.onChangeUserEmail}
            />
          </div>

          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_phone}
              onChange={this.onChangeUserPhone}
            />
          </div>

          <div className="form-group">
            <label>Website: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.user_website}
              onChange={this.onChangeUserWebsite}
            />
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
