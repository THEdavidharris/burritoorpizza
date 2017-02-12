import React from 'react';
import ReactDOM from 'react-dom';
import Locator from './Components/Locator/Locator';
import MapContainer from './Components/Map/MapContainer'
import SearchBox from './Components/Geosearch/SearchBox'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <SearchBox />,
  document.getElementById('root')
);
