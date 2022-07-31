import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCookie, getCookie } from "cookies-next";
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
            <div className={style.navMenu__container} id="mailTo" onClick={handleClickContact}>
                <FontAwesomeIcon icon={props.icon.faEnvelope} />
                <p>Nous contacter</p>
            </div>
            <div className={style.navMenu__container} onClick={handleClickLogout}>
                <FontAwesomeIcon icon={props.icon.faArrowRightFromBracket} />
                <p>Se déconnecter</p>
            </div>
        </div>
    );
};
