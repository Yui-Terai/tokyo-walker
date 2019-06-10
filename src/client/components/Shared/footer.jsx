import React from 'react';
// import styles from './style.scss';
// import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact';
import StickyFooter from 'react-sticky-footer';

class Footer extends React.Component {
  render() {
    return (
      <StickyFooter
        bottomThreshold={100}
        normalStyles={{
          backgroundColor: '#999999',
          padding: '2rem'
        }}
        stickyStyles={{
          backgroundColor: 'rgba(255,255,255,.8)',
          padding: '4rem'
        }}
      >
        Add any footer markup here
      </StickyFooter>

      // <MDBFooter className="font-small pt-4 mt-4" style={{background: 'beige'}}>
      //   <div className="footer-copyright text-center py-3">
      //     <MDBContainer fluid>
      //       &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      //     </MDBContainer>
      //   </div>
      // </MDBFooter>
    );
  }
}

export default Footer;
