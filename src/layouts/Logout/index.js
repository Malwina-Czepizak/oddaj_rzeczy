import React from 'react';
import NavigationWithHashLink from "../../components/NavigationWithHashLink";
import decorator from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import "./Logout.scss";

function Logout() {
    return (
        <div className="logout">
            <NavigationWithHashLink />
            <div className="form__container">
                <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                <img src={decorator} alt="decoration"/>
                <div className="form__buttons">
                    <button><Link to="/">Strona główna</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Logout;