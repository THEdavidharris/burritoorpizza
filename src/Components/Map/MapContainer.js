// GoogleMap.js
import React, { Component } from 'react';
import Map from './Map'

class MapContainer extends Component {
  render() {
    return (
      <Map
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />
    );
  }
}

export default MapContainer;
