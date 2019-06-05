import React from 'react';
import styles from './style.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-md bg-faded justify-content-center fixed-top"
        id={styles.navbar}
      >
        <a href="/" className="navbar-brand d-flex w-50 mr-auto">
          Tokyo Walker
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item mx-4">
              <a className="nav-link" href="/see">
                See & Do
              </a>
            </li>{' '}
            <li className="nav-item mx-4">
              <a className="nav-link" href="/eat">
                Eat & Drink
              </a>
            </li>{' '}
            <li className="nav-item mx-4">
              <a className="nav-link" href="/shopping">
                Shopping
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                <i className="fas fa-search" />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="/favorite">
                favorite ❤️
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
