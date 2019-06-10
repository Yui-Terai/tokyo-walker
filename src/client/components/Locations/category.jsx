import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.scss';

class Category extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('Category props', this.props);
    return (
      <React.Fragment>
        {this.props.data !== null
          ? this.props.data.categories.map((location, index) => (
              <div key={index} className="col-md-4 col-lg-3 col-6" id={styles.font}>
                <img className="card-img-top" src={location.img} id={styles.categoryImg} alt="..." />
                <div className="card mb-4" id={styles.categoryCard}>
                  <div className="card-body">
                    <b>
                      <p className="card-title text-center">
                        {location.name}
                      </p>
                    </b>
                    <p className="card-text" />
                    <div className="d-flex justify-content-end">
                      <Link
                        to={{
                          pathname: `/location/${location.id}`,
                          data: location,
                          favorited: localStorage.getItem('favorite')
                        }}
                        style={{color: 'black', fontSize: '14px'}}
                      >
                        See more info&nbsp;
                        <i className="fas fa-chevron-circle-right" style={{color: '#FFC64A'}} />
                      </Link>
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
