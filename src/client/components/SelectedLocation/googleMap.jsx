import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './style.scss';

const AnyReactComponent = ({text}) => <div className={styles.test}>{text}</div>;


class GoogleMap extends Component {
  static defaultProps = {
    zoom: 14
  };

  render() {
    const {lat, lng} = this.props;

    return (
      <div className={styles.googleMap}>
        <GoogleMapReact
          bootstrapURLKeys={{key: ''}}
          defaultCenter={{lat, lng}}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={this.props.lat} lng={this.props.lng} text="📍" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
