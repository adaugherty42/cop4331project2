import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Profile from "./components/profile.component";

import logo from "./UCF.png";

class App extends Component {
  render() {
    return (
      <Router> 
        <div className="container-fluid">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://maps.google.com" target="_blank">
              <img src={logo} width="35" height="40" alt="Logo" />
            </a>
            <Link to="/" className="navbar-brand">Knights Rides</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Rides</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Schedule Ride</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;