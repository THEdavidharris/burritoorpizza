// Locator.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './Locator.css';

class Locator extends Component {

  getCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position){
        var coords = position.coords;
        console.log(coords);
      });
    } else {
      console.log("HTML5 geolocation not available")
    }
  }

  componentDidMount(){
    this.getCurrentLocation();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Locator-intro">
          Getting your location...
        </p>
      </div>
    );
  }
}

export default Locator;
