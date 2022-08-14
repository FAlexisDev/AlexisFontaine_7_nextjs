import React, { useDeferredValue, useEffect, useState } from "react";
import colorLogo from "../../public/assets/logo_couleur.png";
import style from "./header.module.scss";
import { NavButton } from "../navButton";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
    const router = useRouter();

    const [click, setClick] = useState(false);

    const onKeyUp = (e) => {
        if (e.key === "Enter") setClick(!click);
    };
    return (
        <header className={style.container} role="banner">
            <div>
                <div className={style.container__logo}>
                    <h1 className={style.mainTitle}>
                        <img src={colorLogo.src} alt="logo_groupomania" />
                    </h1>

                    {router.route === "/socialMedia" ? (
                        <FontAwesomeIcon
                            icon={props.icon.faBars}
                            role="button"
                            aria-pressed="false"
                            ria-expanded="false"
                            onKeyUp={onKeyUp}
                            tabindex={0}
                            className={style.container__logo__icon}
                            onClick={() => setClick(!click)}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <hr />
                {click ? (
                    <span className={style.container__navMenu}>
                        <NavButton icon={{ faEnvelope, faArrowRightFromBracket }} role="navigation" />
                    </span>
                ) : (
                    ""
                )}
            </div>
        </header>
    );
};
