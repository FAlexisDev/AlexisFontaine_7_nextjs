import React, { useDeferredValue, useEffect, useState } from "react";
import colorLogo from "../../public/assets/logo_couleur.png";
import whiteLogo from "../../public/assets/logo_blanc.png";
import style from "./header.module.scss";
import { NavButton } from "../navButton";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
    const router = useRouter();
    console.log(router.route);
    const [click, setClick] = useState(false);

    return (
        <div className={style.container}>
            <div>
                <div className={style.container__logo}>
                    <img src={colorLogo.src} alt="logo_groupomania" />
                    {router.route === "/socialMedia" ? (
                        <FontAwesomeIcon icon={props.icon.faBars} className={style.container__logo__icon} onClick={() => setClick(!click)} />
                    ) : (
                        ""
                    )}
                </div>
                <hr />
                {click ? (
                    <span className={style.container__navMenu}>
                        <NavButton icon={{ faEnvelope, faArrowRightFromBracket }} />
                    </span>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
