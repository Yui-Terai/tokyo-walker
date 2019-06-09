import React from 'react';
// import styles from './style.scss';
import Category from './category.jsx';
import Jumbotron from './jumbotron.jsx';
import Checkbox from './checkbox.jsx';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      lists: null,
      category: '',
      subCategoryID: null,
      // isChecked: false
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  componentDidMount() {
    Promise.all([fetch(`/category${window.location.pathname}`), fetch(`/lists${window.location.pathname}`)])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({
          data: res1,
          lists: res2
        });

        this.setState({category: window.location.pathname});
      });
  }

  handleChecked(event) {
    event.preventDefault();
    let subCategoryID = parseInt(event.target.value);
    this.setState({subCategoryID: subCategoryID});
    fetch(`/subcategory/${this.state.subCategoryID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        Accept: '*/*'
      }
    })
      .then((response) => response.json())
      .then((json) => this.setState({data: json}));
  }

  render() {
    console.log('Locations State', this.state);
    return (
      <React.Fragment>
        <Jumbotron category={this.state.category} />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 mb-5">
              <Checkbox
                lists={this.state.lists}
                data={this.state.data}
                handleChecked={this.handleChecked}
                isChecked={this.state.isChecked}
              />
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  <Category data={this.state.data} locations={this.state.locations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Locations;
