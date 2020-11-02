import React from 'react';
import "./DonateBtn.scss";
import {Link} from "react-router-dom";

export function GiveThingsBtn() {
    return <button><Link to="/logowanie">Oddaj rzeczy</Link></button>
}

export function ArrangeDonationBtn() {
    return <button>Zorganizuj zbiórkę</button>
}