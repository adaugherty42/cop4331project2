import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div class="container-fluid text-center">
        <div class="row content">
          <div class="col-sm-2 sidenav">
            <h3>Something will go here</h3>
          </div>
          <div class="col-sm-8 text-center">
            <h1>Upcoming Ride</h1>
            <hr></hr>
          </div>
          <div class="col-sm-2 sidenav">
            <h3>And one more thing will go in here</h3>
          </div>
        </div>
      </div>
        );
    }
}