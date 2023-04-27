import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route path="/about">
      <h1>About Page</h1>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);