import React from 'react';
import { hot } from 'react-hot-loader';
  
import Home from './components/Home/home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        <Home />
        Welcome.
      </div>
    );
  }
}

export default hot(module)(App);