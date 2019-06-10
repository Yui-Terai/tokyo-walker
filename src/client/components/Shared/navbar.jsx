import React from 'react';
import styles from './style.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-md justify-content-center bg-light fixed-top"
        id={styles.navbar}
      >
        <a href="/" className="navbar-brand d-flex w-50 mr-auto" style={{color: 'black'}} id={styles.font2}>
          Tokyo Walker
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul className="navbar-nav d-flex justify-content-between w-100">
            <li className="nav-item active">
              <a className="nav-link" href="/see" style={{color: 'black'}}>
                See & Do
              </a>
            </li>{' '}
            <li className="nav-item">
              <a className="nav-link" href="/eat" style={{color: 'black'}}>
                Eat & Drink
              </a>
            </li>{' '}
            <li className="nav-item">
              <a className="nav-link" href="/shopping" style={{color: 'black'}}>
                Shopping
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="/favorite" style={{color: 'black'}} >
                Favorite❤️
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
