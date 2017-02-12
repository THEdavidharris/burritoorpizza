import React from 'react';
import ReactDOM from 'react-dom';
import Locator from './Components/Locator/Locator';
import MapContainer from './Components/Map/MapContainer'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <MapContainer />,
  document.getElementById('root')
);
