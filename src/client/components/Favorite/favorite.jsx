import React from 'react';
import styles from './style.scss';

class Favorite extends React.Component {
  constructor() {
    super();
    const favoriteLocations = JSON.parse(localStorage.getItem('favorite'));
    this.state = {
      favoriteLocations: favoriteLocations
    };
  }

  render() {
    let favoriteLocations;

    if (this.state.favoriteLocations) {
      favoriteLocations = this.state.favoriteLocations.favorite.map((location, index) => {
        return (
          <div className="row">
            <div className="col-4">
              <img className={styles.favoriteLocationImg} src={location.img} />
            </div>

            <div className="col-8">
              <h2>{location.name}</h2>
              <h5>{location.jp_name}</h5>
              <p>{location.address}</p>
            </div>
          </div>
        );
      });
    } else {
      favoriteLocations = null;
    }
    return (
      <React.Fragment>
        <div className="container mt-5">{favoriteLocations}</div>
      </React.Fragment>
    );
  }
}
export default Favorite;
