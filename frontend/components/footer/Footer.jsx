import React from "react";
import style from "./style.module.scss";

const Footer = () => {
    return (
        <div className={style.footer}>
            <h1>Groupomania</h1>
            <ul className={style.footer__list}>
                <li>Contactez-nous</li>
                <li>Contactez-nous</li>
                <li>Contactez-nous</li>
            </ul>
        </div>
    );
};

export default Footer;
