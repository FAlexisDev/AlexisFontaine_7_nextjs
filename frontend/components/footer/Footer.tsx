import React from "react";
import style from "./style.module.scss";
import { useRouter } from "next/router";

export const Footer = () => {
    const router = useRouter();

    return (
        <div className={style.footer} id="footer" style={router.route === "/socialMedia" ? { marginBottom: "-130px" } : { marginBottom: "0" }}>
            <h1>Groupomania</h1>
            <ul className={style.footer__list}>
                <li>Contactez-nous</li>
                <li>Contactez-nous</li>
                <li>Contactez-nous</li>
            </ul>
        </div>
    );
};
