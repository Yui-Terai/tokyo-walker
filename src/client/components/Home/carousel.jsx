import React from 'react';
import styles from './style.scss';
import homeImg1 from '../../Images/louie-martinez-482218-unsplash.jpg';
import homeImg2 from '../../Images/hari-panicker-1593166-unsplash.jpg';
import homeImg3 from '../../Images/jezael-melgoza-1355992-unsplash.jpg';

class Carousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeImg1} className="d-block" alt="..." id={styles.homePageCarousel} />
            <div className="carousel-caption d-none d-lg-block">
              <h1 className={styles.text}>Walk Around In Tokyo</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homeImg2} className="d-block" alt="..." id={styles.homePageCarousel} />
            <div className="carousel-caption d-none d-lg-block">
              <h1 className={styles.text}>Discover Tasty Food In Tokyo</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homeImg3} className="d-block" alt="..." id={styles.homePageCarousel} />
            <div className="carousel-caption d-none d-lg-block">
              <h1 className={styles.text}>Stay On Trend With The Latest Tokyo</h1>
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
    );
  }
}

export default Carousel;
