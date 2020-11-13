import React from 'react';
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import "./NavigationWithHashLink.scss";

function NavigationWithHashLink() {
    return (
        <div className="navigation">
            <div className="navigation__top">
                <span><Link to="/logowanie">Zaloguj</Link></span>
                <span><Link to="/rejestracja">Załóż konto</Link></span>
            </div>
            <div className="navigation__bottom">
                <span><HashLink to="/#start">Start</HashLink></span>
                <span><HashLink to="/#instruction" >O co chodzi?</HashLink></span>
                <span><HashLink to="/#about" >O nas</HashLink></span>
                <span><HashLink to="/#collabs" >Fundacja i organizacje</HashLink></span>
                <span><HashLink to="/#contact" >Kontakt</HashLink></span>
            </div>
        </div>
    );
}

export default NavigationWithHashLink;