import React from 'react';
import styles from './style.scss';
import Modal from './modal.jsx';

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                <a className="nav-link" href="#" data-toggle="modal" data-target="#seeDoModal">
                  See & Do
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#" data-toggle="modal" data-target="#eatDrinkModal">
                  Eat & Drink
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#" data-toggle="modal" data-target="#shoppingModal">
                  Shopping
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#" data-toggle="modal" data-target="#searchModal">
                  <i className="fas fa-search" />
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Modal />
      </React.Fragment>
    );
  }
}

export default Navbar;
