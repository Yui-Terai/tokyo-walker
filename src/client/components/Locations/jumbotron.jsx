import React from 'react';
import styles from './style.scss';

class Jumbotron extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid" id={styles.jumbotron}>
        <div className="container">
          <h1 className="display-4">
            {(() => {
              switch (this.props.category) {
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
    );
  }
}

export default Jumbotron;
