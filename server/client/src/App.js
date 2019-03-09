import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              User CRUD app
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Users
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create User
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={UserList} />
          <Route path="/edit/:id" component={EditUser} />
          <Route path="/create" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
