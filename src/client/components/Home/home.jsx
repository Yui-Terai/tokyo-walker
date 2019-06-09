import React from 'react';
import styles from './style.scss';
import Carousel from './carousel.jsx';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('/locations', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => {
        let shuffle = require('shuffle-array');
        shuffle(json.locations);
        let splicedItems = json.locations.splice(0, 8);
        this.setState({data: splicedItems});
      });
  }

  render() {
    console.log('Home State', this.state);
    let locations;
    if (this.state.data) {
      locations = this.state.data.map((location, index) => {
        return (
          <div key={index} className="col-6 col-md-4 col-lg-3 my-3">
            <div
              className="homePageImg d-flex justify-content-center align-items-center text-center"
              id={styles.homePageImg}
            >
              <img className="d-block w-100 h-100" src={location.img} alt="..." />
              <a className="align-items-center text-center position-absolute w-75" href="#">
                {location.name}
              </a>
            </div>
          </div>
        );
      });
    } else {
      locations = null;
    }
    return (
      <div className="bd-example">
        <Carousel />

        <div className="homePageSubtitle text-center mt-5 mb-3">
          <h1>discover things</h1>
        </div>

        <div className="container mt-4 mb-5">
          <div className="row">{locations}</div>
        </div>
      </div>
    );
  }
}

export default Home;
