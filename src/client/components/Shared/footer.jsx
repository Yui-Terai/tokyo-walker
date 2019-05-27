import React from 'react';
// import styles from './style.scss';
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact';

class Footer extends React.Component {
  render() {
    return (
      <MDBFooter className="font-small pt-4 mt-4" style={{background: 'pink'}}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol>
              <div>yesh</div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
