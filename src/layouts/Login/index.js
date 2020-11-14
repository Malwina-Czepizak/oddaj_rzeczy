import React from 'react';
import {Link} from "react-router-dom";
import "./Login.scss";
import NavigationWithHashLink from "../../components/NavigationWithHashLink";
import decorator from "../../assets/Decoration.svg"

function Login() {
    return (
        <div className="login">
            <NavigationWithHashLink />
            <div className="form__container">
                <h1>Zalog się</h1>
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
                </form>
                <div className="form__buttons">
                    <button><Link to="/rejestracja">Załóż konto</Link></button>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </div>
    );
}

export default Login;