import React from 'react';
import styles from './style.scss';
import LocationsInCategory from './locationsInCategory.jsx';

class LocationsInList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      category: '',
      subCategory: null
    };
  }

  componentDidMount() {
    Promise.all([fetch(`/category${window.location.pathname}`), fetch('/subcategories')])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({
          data: res1,
          subCategory: res2
        });
        // console.log('storage', localStorage);

        // localStorage.setItem('favorited', 1);

        // console.log(this.state);
      });
  }

  // componentDidMount() {
  //   fetch(`/category${window.location.pathname}`, {
  //     method: 'GET', headers: {'Content-Type': 'text/html; charset=UTF-8'}
  //   })
  //     .then((response) => response.json())
  //     .then((json) => this.setState({data: json}));

  //   this.setState({category: window.location.pathname});
  //   console.log(`im catergory: ${this.state.category}`);
  // }

  render() {
    console.log('locationsInList State', this.state);
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
              <form className="form-inline">
                <i className="fas fa-search" aria-hidden="true" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  <LocationsInCategory data={this.state.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LocationsInList;
