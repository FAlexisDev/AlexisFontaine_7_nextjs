import React from "react";
import style from "./footer.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export const Footer = () => {
    const router = useRouter();

    return (
        <footer className={style.footer} id="footer" style={router.route === "/socialMedia" ? { marginBottom: "-130px" } : { marginBottom: "0" }}>
            <h2>Groupomania</h2>
            <ul className={style.footer__list}>
                <li>
                    <a href="mailto:contact@groupomania.com" role="link">
                        Contactez-nous
                    </a>
                </li>

                <li>
                    <a
                        role="link"
                        onClick={() => {
                            alert("Feature en cours de développement");
                        }}
                    >
                        Conditions générales d'utilisation
                    </a>
                </li>
            </ul>
        </footer>
    );
};
