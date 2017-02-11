import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
