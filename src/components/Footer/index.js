import React from 'react';
import "./Footer.scss";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <p>Copyright by Coders Lab</p>
            </footer>
            <div className="social__icons">
                <a href="https://www.facebook.com">
                    <img src={facebook} alt="facebook"/>
                </a>
                <a href="https://www.instagram.con">
                    <img src={instagram} alt="instagram"/>
                </a>
            </div>
        </>
    );
}

export default Footer;