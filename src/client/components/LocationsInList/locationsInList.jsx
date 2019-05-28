import React from 'react';
import styles from './style.scss';
import LocationsInCategory from './locationsInCategory.jsx';

class LocationsInList extends React.Component {
  // componentDidUpdate(prevProps, props){
  //   console.log(prevProps, props)
  // }
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(`/category${window.location.pathname}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => this.setState({data: json}));
  }

  render() {
    console.log('locationsInList State', this.state);
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid" id={styles.jumbotron}>
          <div className="container">
            <h1 className="display - 4" />
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

                  {/* <div className="col-md-4 col-lg-3 col-6">
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                      alt="..."
                    />
                    <div className="card mb-4">
                      <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text" />
                        <div className="d-flex justify-content-end">
                          <a href="#">im link</a>
                        </div>
                      </div>
                    </div>
                  </div> */}
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
