import React from 'react';
import styles from './style.scss';
import {Link} from 'react-router-dom';
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
              <Link
                to={{
                  pathname: `/location/${location.id}`,
                  data: location,
                  favorited: localStorage.getItem('favorite')
                }}
                className={styles.homeTextOnImg}
              >
                <b>{location.name}</b>
              </Link>
            </div>
          </div>
        );
      });
    } else {
      locations = null;
    }
    return (
      <div className="bd-example" id={styles.font}>
        <Carousel />

        <div className="homeTitleExplore text-center mt-5 mb-3" id={styles.font2}>
          <h1 className={styles.homeH1}>Explore The City</h1>
        </div>

        <div className="container mt-4 mb-5">
          <div className="row">{locations}</div>
        </div>
      </div>
    );
  }
}

export default Home;
