import React from 'react';
import ReactDOM from 'react-dom';
import Locator from './Locator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Locator />, div);
});
