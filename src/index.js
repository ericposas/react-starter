import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {MyComponent} from './components/MyComponent.jsx';

let destination = $('#container')[0];

ReactDOM.render(
  <MyComponent title="My Title for MyComponent">
    Test
  </MyComponent>,
  destination
)
