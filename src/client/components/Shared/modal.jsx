import React from 'react';
import {NavLink} from 'react-router-dom';
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
                    <NavLink to="/seedo/mustgo">Must Go</NavLink>
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
                    <NavLink to="/eatdrink/musteat">Must Eat</NavLink>
                  </li>
                  <li>
                    <NavLink to="/eatdrink/localfood">Tokyo Local Food</NavLink>
                  </li>
                  <li>
                    <NavLink to="/eatdrink/streetfood">Street Food</NavLink>
                  </li>
                  <li>
                    <NavLink to="/eatdrink/ramen">Ramen</NavLink>
                  </li>
                  <li>
                    <NavLink to="/eatdrink/izakaya">Izakaya & Yoko-cho</NavLink>
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
                    <NavLink to="/shopping/local">Local Market</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shopping/taxfree">Tax-free</NavLink>
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



{/*  <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/seedo/mustgo" render={props => <LocationsInList {...props} list={1}/>} />
          <Route exact path="/seedo/templeshrine" render={props => <LocationsInList {...props} list={2}/>} />
          <Route exact path="/seedo/culture" component={LocationsInList} />
          <Route exact path="/seedo/entertainment" component={LocationsInList} />

          <Route exact path="/eatdrink/musteat" component={LocationsInList} />
          <Route exact path="/eatdrink/localfood" component={LocationsInList} />
          <Route exact path="/eatdrink/streetfood" component={LocationsInList} />
          <Route exact path="/eatdrink/ramen" component={LocationsInList} />
          <Route exact path="/eatdrink/izakaya" component={LocationsInList} />

          <Route exact path="/shopping/local" component={LocationsInList} />
          <Route exact path="/shopping/taxfree" component={LocationsInList} />
        </Switch>
      </BrowserRouter> */}

export default Modal;
