import React from 'react';
import Navbar from '../Shared/navbar';
import Footer from '../Shared/footer';
import styles from './style.scss';

class SelectedLocation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-md-8">
              <div>
                <img
                  className="w-100"
                  id={styles.locationInfoImg}
                  src="https://images.unsplash.com/photo-1493514901090-977e25adc0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  alt="..."
                />
              </div>
              <div className="mx-3 mt-3 mb-1">
                <h1>Tokyo Tower</h1>
              </div>
              <div className="mx-4 mt-1 mb-5">
                <h4>浅草寺</h4>
              </div>
              <div className="mx-4">
                <p>
                  ksfjkshdfg;hw;efh;keghfvjkhwei;vhwjkhfvkjsdhfvjhgsdkjfhvkjsgdvjkgsdjkfgvksjfdhdgfjkshdjkfhehtalsdhcjkahfjkhefgwegvjwgfvjgjg
                </p>
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
                <p>📍address</p>
              </div>
              <div>
                <p>🕒opening</p>
              </div>
              <div>
                <p>💴yen</p>
              </div>
              <div>
                <p>
                  💻<a href="https://www.lipsum.com/">website</a>
                </p>
              </div>
              <div>
                <button type="button" className="btn btn-warning">
                  see hotels nearby&nbsp;
                  <i className="fas fa-chevron-circle-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default SelectedLocation;
