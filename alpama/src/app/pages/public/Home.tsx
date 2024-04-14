import {ArrowRight, ChevronRight} from "lucide-react";
import rollWool from "../../../assets/images/roll-wool.png";
import sweaterAlpaca from "../../../assets/images/sweater-alpaca.png";
import vestAlpaca from "../../../assets/images/vest-alpaca.png";
import beanieAlpaca from "../../../assets/images/beanie-alpaca.webp";
import glovesAlpaca from "../../../assets/images/pair-gloves-alpaca.png";
import socksAlpaca from "../../../assets/images/socks-alpaca.png";

function Home() {
  return (
    <main className="home">
      <section className="home__introduction">
        <h1 className="home__introduction--title">Alpama - Your Source For Stylish Living</h1>
        <p className="home__introduction--text">Phasellus eu mi sollicitudin, semper tortor at, finibus velit.
          In nec elit quam. Nullam lacinia fringilla ex, nec venenatis purus porta ac.
        </p>
        <button className="home__introduction--btn">
          <ChevronRight/>
          <span>Shop now</span>
        </button>
      </section>
      <section className="home__about">
        <div className="home__about__images">
          <img className="home__about__images--roll" src={rollWool} alt="roll alpaca"/>
          <img className="home__about__images--sweater" src={sweaterAlpaca} alt="sweater alpaca"/>
        </div>
        <div className="home__about__content">
          <span className="home__about__content--subtitle">About us</span>
          <h2 className="home__about__content--title">Unlocking The Potential Of Your Space</h2>
          <div className="home__about__content--text">
            <p>Vestibulum quis volutpat nulla. Nunc id sem ac mauris elementum ornare. Fusce laoreet at ipsum eu
              mattis. Curabitur eros ante, egestas eget sem vel, interdum efficitur nibh.</p>
            <p>Nunc commodo lorem vel massa pellentesque suscipit. Aliquam consequat, tellus quis dictum volutpat,
              augue est porttitor ligula, rutrum bibendum felis elit nec mauris. Nunc elit magna, porta auctor
              luctus et, blandit ac odio.</p>
          </div>
          <button className="home__about__content--btn">
            <span>Read more</span>
            <ArrowRight/>
          </button>
        </div>
      </section>

      <section className="home__services">
        <div className="home__services__heading">
          <span className="home__services__heading--subtitle">Services</span>
          <h2 className="home__services__heading--title">Elevate Your Space With Elegance</h2>
        </div>
        <div className="home__services__cards">
          <div className="home__services__cards--item">
            <h2 className="home__services__cards--item--title">Title cards</h2>
            <p className="home__services__cards--item--text">Vestibulum quis volutpat nulla. Nunc id sem ac mauris
              elementum ornare. Fusce laoreet at ipsum eu mattis.</p>
          </div>
          <div className="home__services__cards--item">
            <h2 className="home__services__cards--item--title">Title cards</h2>
            <p className="home__services__cards--item--text">Vestibulum quis volutpat nulla. Nunc id sem ac mauris
              elementum ornare. Fusce laoreet at ipsum eu mattis.</p>
          </div>
          <div className="home__services__cards--item">
            <h2 className="home__services__cards--item--title">Title cards</h2>
            <p className="home__services__cards--item--text">Vestibulum quis volutpat nulla. Nunc id sem ac mauris
              elementum ornare. Fusce laoreet at ipsum eu mattis.</p>
          </div>
          <div className="home__services__cards--item">
            <h2 className="home__services__cards--item--title">Title cards</h2>
            <p className="home__services__cards--item--text">Vestibulum quis volutpat nulla. Nunc id sem ac mauris
              elementum ornare. Fusce laoreet at ipsum eu mattis.</p>
          </div>
        </div>
      </section>
      <section className="home__choose">
        <div className="home__choose__content">
          <span className="home__choose__content--subtitle">why choose us ?</span>
          <h2 className="home__choose__content--title">Creating Beauty, One Room At A Time</h2>
          <div className="home__choose__content--text">
            <p>Vestibulum quis volutpat nulla. Nunc id sem ac mauris elementum ornare. Fusce laoreet at ipsum eu
              mattis. Curabitur eros ante, egestas eget sem vel, interdum efficitur nibh.</p>
            <p>Nunc commodo lorem vel massa pellentesque suscipit. Aliquam consequat, tellus quis dictum volutpat,
              augue est porttitor ligula, rutrum bibendum felis elit nec mauris. Nunc elit magna, porta auctor
              luctus et, blandit ac odio.</p>
          </div>
        </div>
        <div className="home__choose__images">
          <img className="home__choose__images--roll" src={rollWool} alt="roll alpaca"/>
          <img className="home__choose__images--sweater" src={sweaterAlpaca} alt="sweater alpaca"/>
        </div>
      </section>


      <section className="home__gallery">
        <div className="home__gallery__heading">
          <span className="home__gallery__heading--subtitle">Gallery</span>
          <h2 className="home__gallery__heading--title">Your Space, Our Canvas, Endless Possibilities</h2>
        </div>
        <div className="home__gallery__images">
          <div className="home__gallery__images--top">
            <img src={vestAlpaca} alt="vest wool alpaca"/>
            <img src={beanieAlpaca} alt="beanie alpaca"/>
          </div>
          <div className="home__gallery__images--bottom">
            <img src={sweaterAlpaca} alt="sweater alpaca"/>
            <img src={glovesAlpaca} alt="pair gloves alpaca"/>
            <img src={socksAlpaca} alt="socks alpaca"/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
