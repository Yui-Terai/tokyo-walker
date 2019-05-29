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
    // this.onClickCategory = this.onClickCategory.bind(this);
    // this.getCategoryLists = this.getCategoryLists.bind(this);
  }

  // onClickCategory(event) {
  //   this.setState({category: event.target.value})
  //   this.getCategoryLists();
  // }
  // getCategoryLists() {
  //   fetch(`/category/${this.state.category}`, {
  //     method: 'GET'
  //   })
  //     .then((response) => response.json())
  //     .then((json) => this.setState({listsOfLocation: json.product}));
  // }

  // getList(number) {
  //   fetch(`/lists/${number}`)
  //     .then((response) => response.json())
  //     .then((json) => this.setState({data: json}));
  // }

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
        {/* <Navbar 
          getCategoryLists={this.getCategoryLists}
        /> */}
        {/* <Home /> */}
        <Footer />
        {/* <LocationsInList /> */}
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
