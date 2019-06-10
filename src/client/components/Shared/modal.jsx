import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './style.scss';

class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="modal fade" id="infoModal">
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
                    <a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=JPY">yo</a>
                  </li>
                  <li>
                    <NavLink to="/seedo/templeshrine">Temple & Shrine</NavLink>
                  </li>
                  <li>
                    <NavLink to="/seedo/culture">Culture</NavLink>
                  </li>
                  <li>
                    <NavLink to="/seedo/entertainment">Entertainment</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
