import React from "react";
import logo from "../../assets/logo_couleur.png";
import style from "./style.module.scss";
const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.container__logo}>
                <img src={logo.src} alt="logo_groupomania" />
            </div>
            <hr />
        </div>
    );
};

export default Header;
