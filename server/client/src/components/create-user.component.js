import React, { Component } from "react";

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
      <div>
        <p>Welcome to User List Component!</p>
      </div>
    );
  }
}
