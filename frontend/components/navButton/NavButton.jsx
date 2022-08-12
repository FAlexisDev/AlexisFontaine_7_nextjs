import React from "react";
import style from "./navButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

export const NavButton = (props) => {
    const router = useRouter();
    /**
     *
     */
    const handleClickContact = () => {
        window.open("mailto:contact.groupomania@gmail.com");
    };

    /**
     *
     */
    const handleClickLogout = () => {
        deleteCookie("access_token", { domain: "localhost" });
        router.push("/login");
    };

    return (
        <div className={style.navMenu}>
            <div className={style.navMenu__container} id="mailTo" onClick={handleClickContact} role="link" tabIndex={0}>
                <FontAwesomeIcon icon={props.icon.faEnvelope} role="img" />
                <p>Nous contacter</p>
            </div>

            <div className={style.navMenu__container} onClick={handleClickLogout} role="button" aria-pressed="false" tabIndex={0}>
                <FontAwesomeIcon icon={props.icon.faArrowRightFromBracket} role="img" />
                <p>Se déconnecter</p>
            </div>
            <hr className={style.navMenu__hr} />
        </div>
    );
};
