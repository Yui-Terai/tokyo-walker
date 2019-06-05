import React from 'react';
import {Link} from 'react-router-dom';


class Category extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('Category props', this.props)
    return (
      <React.Fragment>
        {this.props.data !== null
          ? this.props.data.categories.map((location, index) => (
              <div key={index} className="col-md-4 col-lg-3 col-6">
                <img className="card-img-top" src={location.img} alt="..." />
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">{location.name}</h4>
                    <p className="card-text" />
                    <div className="d-flex justify-content-end">
                      <Link 
                        to={{
                          pathname: `/location/${location.id}`,
                          data: location,
                          favorited: localStorage.getItem('favorite')
                        }}
                      >
                        click to see >>
                      </Link>
                      {/* <a href={`/location/${location.id}`}>im link</a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </React.Fragment>
    );
  }
}

export default Category;
