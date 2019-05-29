import React from 'react';
import styles from './style.scss';
// import {Redirect} from 'react-router-dom';

class SelectedLocation extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      address,
      category,
      description,
      fee,
      hotels_nearby,
      id,
      img,
      jp_name,
      latitude,
      longitude,
      name,
      opening_hours,
      website
    } = this.props.location.data;
    return (
      <React.Fragment>
        {this.props.location.data !== null ? (
          <div className="container my-5 pt-5">
            <div className="row">
              <div className="col-md-8">
                <div>
                  <img className="w-100" id={styles.locationInfoImg} src={img} alt="..." />
                </div>
                <div className="mx-3 mt-3 mb-1">
                  <h1>{name}</h1>
                </div>
                <div className="mx-4 mt-1 mb-5">
                  <h4>{jp_name}</h4>
                </div>
                <div className="mx-4">
                  <p>{description}</p>
                </div>
              </div>
              <div className="col-md-4 mt-5 pl-5">
                <div>
                  <button type="button" className="btn btn-outline-primary">
                    add to favorite&nbsp;
                    <i className="far fa-heart" />
                  </button>
                </div>
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
                    💻<a href={website}>website</a>
                  </p>
                </div>
                <div>
                  <a className="btn btn-warning" href={hotels_nearby} role="button">
                    see hotels nearby&nbsp;
                    <i className="fas fa-chevron-circle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default SelectedLocation;
