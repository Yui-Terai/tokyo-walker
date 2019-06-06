import React from 'react';
import styles from './style.scss';
import {Link} from 'react-router-dom';

class Favorite extends React.Component {
  constructor() {
    super();
    const favoriteLocations = JSON.parse(localStorage.getItem('favorite'));
    this.state = {
      favoriteLocations: favoriteLocations
    };
  }

  removeFromFavorite(index) {
    const favoriteLocations = JSON.parse(localStorage.getItem('favorite'));
    favoriteLocations.favorite.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(favoriteLocations));
    this.setState({favoriteLocations: favoriteLocations});
  }

  render() {
    let favoriteLocations;

    if (this.state.favoriteLocations) {
      favoriteLocations = this.state.favoriteLocations.favorite.map((location, index) => {
        return (
          <div key={index} className="row">
            <div className="col-3">
              <img className={styles.favoriteLocationImg} src={location.img} />
            </div>

            <div className="col-7">
              <h2>{location.name}</h2>
              <h5>{location.jp_name}</h5>
              <p>{location.address}</p>
              <Link
                to={{
                  pathname: `/location/${location.id}`,
                  data: location,
                  favorited: localStorage.getItem('favorite')
                }}
              >
                click to see >>
              </Link>
            </div>
            <div className="col-2">
              <button
                className="btn"
                onClick={() => {
                  this.removeFromFavorite(index);
                }}
              >
                <i className="fas fa-trash-alt" />
              </button>
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
