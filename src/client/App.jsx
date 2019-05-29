import React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Shared/navbar';
import Footer from './components/Shared/footer';
import Home from './components/Home/home';
import LocationsInList from './components/LocationsInList/locationsInList';
import SelectedLocation from './components/SelectedLocation/selectedLocation';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/see" component={LocationsInList} />
          <Route path="/eat" component={LocationsInList} />
          <Route path="/shopping" component={LocationsInList} />
          <Route path="/location/:id" component={SelectedLocation} />
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
