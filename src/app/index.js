import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/Root.jsx';

ReactDOM.render((
    <BrowserRouter>
    <Root/>    
  </BrowserRouter>
  ), document.getElementById('root'));
