import React from 'react';
import "./HomeInstruction.scss";
import decorator from "../../../assets/Decoration.svg";
import shirt from "../../../assets/Icon-1.svg";
import bag from "../../../assets/Icon-2.svg";
import loupe from "../../../assets/Icon-3.svg";
import repeat from "../../../assets/Icon-4.svg";
import {GiveThingsBtn} from "../../../components/DonateBtn";


function HomeInstruction() {
    return (
        <section name="instruction" className="home__instruction" id="instruction">
            <div className="home__instruction__header">
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decorator} alt="decoration"/>
            </div>
            <div className="home__instruction__main">
                <div className="home__instruction__main__content">
                    <img src={shirt} alt="t-shirt"/>
                    <span>Wybierz rzeczy</span>
                    <hr className="line"/>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="home__instruction__main__content">
                    <img src={bag} alt="bag"/>
                    <span>Spakuj je</span>
                    <hr className="line"/>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="home__instruction__main__content">
                    <img src={loupe} alt="magnifying glass"/>
                    <span>Zdecyduj komu chcesz pomóc</span>
                    <hr className="line"/>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className="home__instruction__main__content">
                    <img src={repeat} alt="repeat circle"/>
                    <span>Zamów kuriera</span>
                    <hr className="line"/>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <GiveThingsBtn />
        </section>
    );
}

export default HomeInstruction;