import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
          <Route path="/" exact component={UserList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/create" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
