import React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import GoogleFontLoader from 'react-google-font-loader';
import Navbar from './components/Shared/navbar';
// import Footer from './components/Shared/footer';
import Home from './components/Home/home';
import Locations from './components/Locations/locations';
import Favorite from './components/Favorite/favorite';
import SelectedLocation from './components/SelectedLocation/selectedLocation';


console.log(`im process: ${process.env.API_KEY}`);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        
        <Router>
        {/* <GoogleFontLoader
          fonts={[
            {
              font: 'Bungee Inline'
            }
          ]}
        /> */}
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/see" component={Locations} />
          <Route path="/eat" component={Locations} />
          <Route path="/shopping" component={Locations} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/location/:id" component={SelectedLocation} />
        </Router>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
