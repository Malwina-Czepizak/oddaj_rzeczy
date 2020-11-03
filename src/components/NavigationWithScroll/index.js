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
                <span><ScrollLink to="start" duration={1000} smooth={true}>Start</ScrollLink></span>
                <span><ScrollLink to="instruction" duration={1000} smooth={true}>O co chodzi?</ScrollLink></span>
                <span><ScrollLink to="about" duration={1000} smooth={true}>O nas</ScrollLink></span>
                <span><ScrollLink to="collabs" duration={1000} smooth={true}>Fundacja i organizacje</ScrollLink></span>
                <span><ScrollLink to="contact" duration={1000} smooth={true}>Kontakt</ScrollLink></span>
            </div>
        </div>
    );
}

export default Navigation;

