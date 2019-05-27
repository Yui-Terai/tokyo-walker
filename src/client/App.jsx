import React from 'react';
import {hot} from 'react-hot-loader';
// import Home from './components/Home/home';
// import  LocationsInList from './components/LocationsInList/locationsInList';
// import SelectedLocation from './components/SelectedLocation/selectedLocation';
class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      // view: 'somethingelse'
    };
  }

  // showContent() {
  //   if (this.state.view == 'home') {
  //     return <Home />;
  //   } else if (this.state.view == 'somethingelse') {
  //     return <div>im something else</div>;
  //   }
  // }

  render() {
    return (
      <div>
       
        {/* {this.showContent()} */}
       
      </div>
    );
  }
}

export default hot(module)(App);
