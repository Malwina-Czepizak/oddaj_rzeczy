import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "./NavigationWithScroll.scss";

function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__top">
                <span><Link to="/logowanie">Zaloguj</Link></span>
                <span><Link to="/rejestracja">Załóż konto</Link></span>
            </div>
            <div className="navigation__bottom">
                <span><ScrollLink to="start">Start</ScrollLink></span>
                <span><ScrollLink to="instruction">O co chodzi?</ScrollLink></span>
                <span><ScrollLink to="about">O nas</ScrollLink></span>
                <span><ScrollLink to="collabs">Fundacja i organizacje</ScrollLink></span>
                <span><ScrollLink to="contact">Kontakt</ScrollLink></span>
            </div>
        </div>
    );
}

export default Navigation;

