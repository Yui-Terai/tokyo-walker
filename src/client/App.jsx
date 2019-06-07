import React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Shared/navbar';
import Footer from './components/Shared/footer';
import Home from './components/Home/home';
import Locations from './components/Locations/locations';
import Favorite from './components/Favorite/favorite';
import SelectedLocation from './components/SelectedLocation/selectedLocation';
// import { GoogleMap } from './components/SelectedLocation/googleMap';
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
          <Route path="/see" component={Locations} />
          <Route path="/eat" component={Locations} />
          <Route path="/shopping" component={Locations} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/location/:id" component={SelectedLocation} />
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
