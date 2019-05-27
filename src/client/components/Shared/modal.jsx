import React from 'react';
import styles from './style.scss';

class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="modal fade" id="seeDoModal">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">See & Do</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <ul id={styles.modalList}>
                  <li>
                    <a href="#">Must Go</a>
                  </li>
                  <li>
                    <a href="#">Temple & Shrine</a>
                  </li>
                  <li>
                    <a href="#">Culture</a>
                  </li>
                  <li>
                    <a href="#">Entertainment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="eatDrinkModal">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Eat & Drink</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <ul id={styles.modalList}>
                  <li>
                    <a href="#">Must Eat</a>
                  </li>
                  <li>
                    <a href="#">Tokyo Local Food</a>
                  </li>
                  <li>
                    <a href="#">Street Food</a>
                  </li>
                  <li>
                    <a href="#">Ramen</a>
                  </li>
                  <li>
                    <a href="#">Izakaya & Yoko-cho</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="shoppingModal">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Shopping</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <ul id={styles.modalList}>
                  <li>
                    <a href="#">Local Market</a>
                  </li>
                  <li>
                    <a href="#">Tax-free</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="searchModal">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <form className="form-inline">
                  <i className="fas fa-search" aria-hidden="true" />
                  <input
                    className="form-control form-control-sm ml-3 w-75"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>

                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  ×
                </button>
              </div>
              <div className="modal-body" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
