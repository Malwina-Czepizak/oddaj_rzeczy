import React from 'react';
import NavigationWithHashLink from "../../components/NavigationWithHashLink";
import decorator from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import "./Register.scss";

function Register() {
    return (
        <div className="register">
            <NavigationWithHashLink />
            <div className="form__container">
                <h1>Załóż konto</h1>
                <img src={decorator} alt="decoration"/>
                <form>
                    <div>
                        <label>Email</label>
                        <input/>
                    </div>
                    <div>
                        <label>Hasło</label>
                        <input/>
                    </div>
                    <div>
                        <label>Powtórz hasło</label>
                        <input/>
                    </div>
                </form>
                <div className="form__buttons">
                    <button><Link to="/logowanie">Zaloguj się</Link></button>
                    <button>Załóż konto</button>
                </div>
            </div>
        </div>
    );
}

export default Register;