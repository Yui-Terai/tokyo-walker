import React from 'react';
// import styles from './style.scss';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      //   isChecked: null
    };
    // this.handleChecked = this.handleChecked.bind(this);
  }

  //   handleChecked(event) {
  //       let subCategoryID = parseInt(event.target.value)
  //     this.setState({isChecked: subCategoryID});
  //       fetch(`/subcategory/${this.state.isChecked}`, {
  //           method: 'GET'
  //       })
  //     .then((response) => response.json())
  //     .then((json) => this.setState({data: json.product}));
  //   }

  render() {
    return (
      <React.Fragment>
        {this.props.lists !== null
          ? this.props.lists.lists.map((subCategory, index) => (
              <div key={index}>
                <button
                  name="subject"
                  type="submit"
                  value={subCategory.id || ''}
                  onClick={(event) => {
                    this.props.handleChecked(event);
                  }}
                >
                  {subCategory.list_group}
                </button>
                {/* <input
                  type="checkbox"
                  value={subCategory.id || ''}
                  onChange={(event) => {
                    this.props.handleChecked(event);
                  }}
                />
                <p>{subCategory.list_group}</p> */}
              </div>
            ))
          : null}
      </React.Fragment>
    );
  }
}

export default Checkbox;
