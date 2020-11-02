import React from 'react';
import Navigation from "../../../components/NavigationWithScroll";
import "./HomeHeader.scss";
import {GiveThingsBtn, ArrangeDonationBtn} from "../../../components/DonateBtn";
import decorator from "../../../assets/Decoration.svg"

function HomeHeader() {
    return (
        <div className="home__header">
            <div className="home__header__background" />
            <div className="home__header__container">
                <Navigation />
                <div className="home__header__introduction">
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={decorator} alt="decoration"/>
                    <div className="home__buttons">
                        <GiveThingsBtn />
                        <ArrangeDonationBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;