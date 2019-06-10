import React from 'react';
import styles from './style.scss';
import GoogleMap from './googleMap';

class SelectedLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteButton: false,
      lat: null,
      lng: null
    };
  }

  componentDidMount() {
    this.setState({lat: this.props.location.data.latitude, lng: this.props.location.data.longitude});
    const locationID = this.props.location.data.id;
    let array = JSON.parse(localStorage.getItem('favorite'));
    if (array !== null) {
      for (let i = 0; i < array.favorite.length; i++) {
        if (locationID === array.favorite[i].id) {
          this.setState({favoriteButton: true});
        }
      }
    }
  }

  doFavorite(e) {
    const locationInfo = this.props.location.data;
    const favoritedLocation = {
      id: locationInfo.id,
      description: locationInfo.description,
      name: locationInfo.name,
      jp_name: locationInfo.jp_name,
      img: locationInfo.img,
      address: locationInfo.address,
      fee: locationInfo.fee,
      opening_hours: locationInfo.opening_hours,
      website: locationInfo.website,
      hotels_nearby: locationInfo.hotels_nearby
    };

    let currentLocalStorage = JSON.parse(localStorage.getItem('favorite'));
    if (!currentLocalStorage) {
      currentLocalStorage = {
        favorite: []
      };
    }

    let favoritedLocations = currentLocalStorage.favorite;

    if (!favoritedLocations.some(({id}) => id === favoritedLocation.id)) {
      favoritedLocations.push(favoritedLocation);
    }

    localStorage.setItem('favorite', JSON.stringify(currentLocalStorage));
    this.setState({favoriteButton: true});
  }

  render() {
    const {
      address,
      id,
      description,
      fee,
      hotels_nearby,
      img,
      jp_name,
      name,
      opening_hours,
      website
    } = this.props.location.data;
    console.log(this.props, 'selected location props', 'favorited', JSON.parse(this.props.location.favorited));
    return (
      <React.Fragment>
        {this.props.location.data !== null ? (
          <div className="container my-5 pt-5" id={styles.font}>
            <div className="row">
              <div className="col-md-8">
                <div>
                  <img className="w-100" id={styles.locationInfoImg} src={img} alt="..." />
                </div>
                <div className="mx-4 mt-3">
                  <h1>{name}</h1>
                </div>
                <div className="mx-4 mb-4">
                  <p>({jp_name})</p>
                </div>
                <div className="mx-4">
                  <p>{description}</p>
                </div>
              </div>
              <div className="col-md-4 mt-3 pl-5">
                <div>
                  <button type="button" className="btn btn-outline-dark" onClick={(e) => this.doFavorite(e)} id={id}>
                    <i className="fas fa-heart" style={this.state.favoriteButton ? {color: 'red'} : {color: 'blue'}} />
                    &nbsp;Favorite
                  </button>
                </div>
                <br />
                <div>
                  <p>📍{address}</p>
                </div>
                <div>
                  <p>🕒{opening_hours}</p>
                </div>
                <div>
                  <p>💴{fee}</p>
                </div>
                <div>
                  <p>
                    🔗
                    <a href={website} className={styles.websiteLink}>
                      Website
                    </a>
                  </p>
                </div>
                <div>
                  <a className="btn btn-warning" href={hotels_nearby} role="button">
                    See hotels nearby&nbsp;
                    <i className="fas fa-chevron-circle-right" />
                  </a>
                </div>
                <br />
                <GoogleMap lat={this.state.lat} lng={this.state.lng} />
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default SelectedLocation;
