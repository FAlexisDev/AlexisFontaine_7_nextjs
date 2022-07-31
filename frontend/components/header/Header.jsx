import React, { useState } from "react";
import colorLogo from "../../public/assets/logo_couleur.png";
import whiteLogo from "../../public/assets/logo_blanc.png";
import style from "./style.module.scss";
import { NavButton } from "../navButton";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
    const router = useRouter();
    const [click, setClick] = useState(false);

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
                    <div className={style.white__logo__container__menu} onClick={() => setClick(!click)}>
                        <div className={style.white__logo__container__menu__bar}></div>
                        <div className={style.white__logo__container__menu__bar}></div>
                        <div className={style.white__logo__container__menu__bar}></div>
                    </div>
                    {click ? (
                        <span className={style.white__logo__container__navMenu}>
                            <NavButton icon={{ faEnvelope, faArrowRightFromBracket }} />
                        </span>
                    ) : (
                        ""
                    )}
                </div>
            )}
        </div>
    );
};
