import React from 'react';
import styles from './style.scss';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.lists !== null
          ? this.props.lists.lists.map((subCategory, index) => (
              <div key={index} id={styles.font}>
                <button
                  className="btn btn-outline-dark mb-2"
                  name="subject"
                  type="submit"
                  value={subCategory.id || ''}
                  onClick={(event) => {
                    this.props.handleChecked(event);
                  }}
                  style={{textTransform: 'capitalize'}}
                >
                  {subCategory.list_group}
                </button>
              </div>
            ))
          : null}
      </React.Fragment>
    );
  }
}

export default Checkbox;
