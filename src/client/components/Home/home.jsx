import React from 'react';
import styles from './style.scss';
// import homeImg2 from '../../Images/moiz-k-malik-1290267-unsplash.jpg';
import homeImg2 from '../../Images/eddi-aguirre-611405-unsplash.jpg';
import homeImg3 from '../../Images/masaaki-komori-580552-unsplash.jpg';
import homeImg4 from '../../Images/emile-guillemot-1198307-unsplash.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleCaptions" data-slide-to="1" />
            <li data-target="#carouselExampleCaptions" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={homeImg2} className="d-block" alt="..." id={styles.homePageCarousel} />
              <div className="carousel-caption d-none d-lg-block">
                <h1 className={styles.text}>Walk Around In Tokyo</h1>
                <a>here is iink</a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={homeImg3} className="d-block" alt="..." id={styles.homePageCarousel} />
              <div className="carousel-caption d-none d-lg-block">
                <h1 className={styles.text}>Where To Eat In Tokyo</h1>
                <a>here is iink</a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={homeImg4} className="d-block" alt="..." id={styles.homePageCarousel} />
              <div className="carousel-caption d-none d-lg-block">
                <h1 className={styles.text}>Stay On Trend With The Latest Tokyo</h1>
                <a>here is iink</a>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="homePageSubtitle text-center mt-5 mb-3">
          <h1>discover things</h1>
        </div>

        <div className="container mt-4 mb-5">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3 my-3">
              <div
                className="homePageImg d-flex justify-content-center align-items-center text-center"
                id={styles.homePageImg}
              >
                <img
                  className="d-block w-100 h-100"
                  src="https://cdn.pixabay.com/photo/2017/08/07/13/43/building-2603950_1280.jpg"
                  alt="..."
                />
                <a className="align-items-center text-center position-absolute" href="#">
                  One of three columns kgkgkjgjk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
