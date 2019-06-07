import React from 'react';
import styles from './style.scss';
import Category from './category.jsx';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      category: '',
      locations: null
    };
  }

  componentDidMount() {
    Promise.all([fetch(`/category${window.location.pathname}`), fetch('/locations')])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({
          data: res1,
          locations: res2
        });

        this.setState({category: window.location.pathname});
      });
  }

  render() {
    console.log('Locations State', this.state);
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid" id={styles.jumbotron}>
          <div className="container">
            <h1 className="display-4">
              {(() => {
                switch (this.state.category) {
                  case '/see':
                    return 'SEE & DO';
                  case '/eat':
                    return 'EAT & DRINK';
                  case '/shopping':
                    return 'SHOPPING';
                  default:
                    return null;
                }
              })()}{' '}
            </h1>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 mb-5">
              {/* <form className="form-inline">
                <i className="fas fa-search" aria-hidden="true" />
                <div>
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                </div>
                <div>
                <input type="checkbox" name="vehicle1" value="Bike" /> must see
                </div>
                <div>
                <input type="checkbox" name="vehicle2" value="Car" /> temple&shrine
                </div>
                <div>
                <input type="checkbox" name="vehicle3" value="Boat" checked /> museum
                </div>
              </form> */}
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  <Category data={this.state.data} locations={this.state.locations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Locations;