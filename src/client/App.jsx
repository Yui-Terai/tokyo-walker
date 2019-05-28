import React from 'react';
import {hot} from 'react-hot-loader';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Shared/navbar';
import Footer from './components/Shared/footer';
import Home from './components/Home/home';
// import LocationsInList from './components/LocationsInList/locationsInList';
// import SelectedLocation from './components/SelectedLocation/selectedLocation';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      requestedList: 0,
      data: null
    };
  }

  getList(number) {
    fetch(`/lists/${number}`)
      .then((response) => response.json())
      .then((json) => this.setState({data: json}));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <Footer />
        {/* <LocationsInList /> */}
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
