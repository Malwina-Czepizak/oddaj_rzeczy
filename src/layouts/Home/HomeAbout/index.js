import React from 'react';
import "./HomeAbout.scss";
import decorator from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg"

function HomeAbout() {
    return (
        <section name="about" className="home__about" id="about">
            <div className="home__about__text">
                <h2>O nas</h2>
                <img src={decorator} alt="decoration"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature" className="signature"/>
            </div>
            <div className="home__about__image"/>
        </section>
    );
}

export default HomeAbout;