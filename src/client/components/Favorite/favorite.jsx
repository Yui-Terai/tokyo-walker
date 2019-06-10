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
          <div key={index} className="container" id={styles.font}>
            <div className="card m-3">
              <div className="row">
                <div className="col-md-8">
                  <div className="card-body px-6 w-100">
                    <h3 className="card-title">{location.name}</h3>
                    <p className="card-text" style={{fontSize: '14px'}}>
                      📍{location.address}
                    </p>
                    <Link
                      to={{
                        pathname: `/location/${location.id}`,
                        data: location,
                        favorited: localStorage.getItem('favorite'),
                        lat: this.props.lat,
                        lng: this.props.lng
                      }}
                      style={{color: 'black'}}
                    >
                      Check It&nbsp;
                      <i className="fas fa-chevron-circle-right" style={{color: '#FFC64A'}} />
                    </Link>
                    <div
                      className="d-flex justify-content-center align-items-start text-center mt-3"
                      id={styles.favoriteBin}
                    >
                      <button
                        className="btn"
                        onClick={() => {
                          this.removeFromFavorite(index);
                        }}
                      >
                        <i className="fas fa-trash-alt" style={{color: 'white'}} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img className={styles.favoriteLocationImg} src={location.img} />
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      favoriteLocations = null;
    }
    return (
      <React.Fragment>
        <div className="container" id={styles.favoriteContainer}>
          {favoriteLocations}
        </div>
      </React.Fragment>
    );
  }
}
export default Favorite;
