import React from "react";
import colorLogo from "../../public/assets/logo_couleur.png";
import whiteLogo from "../../public/assets/logo_blanc.png";
import style from "./style.module.scss";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = (props) => {
    const router = useRouter();

    return (
        <div className={style.container}>
            {router.route != "/socialMedia" ? (
                <div>
                    <div className={style.container__logo}>
                        <img src={colorLogo.src} alt="logo_groupomania" />
                    </div>
                    <hr />
                </div>
            ) : (
                <div className={style.white__logo__container}>
                    <img src={whiteLogo.src} alt="logo_groupomania" />
                    <FontAwesomeIcon icon={props.icon} className={style.white__logo__container__icon} />
                </div>
            )}
        </div>
    );
};
