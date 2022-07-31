import { React, useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { InputGroup } from "../components/input";
import Link from "next/link";
import style from "../styles/Home.module.css";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorHandler = document.querySelector("#errorHandler");
        const loginForm = document.querySelector("#loginForm");
        const formData = new FormData(loginForm);

        let data = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        fetch("http://localhost:4200/api/auth/login", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(async (res) => {
                const data = await res.json();
                sessionStorage.setItem("userId", JSON.stringify(data.userId));
                console.log(data);
                if (res.status === 400) errorHandler.innerText = "❌ Adresse e-mail ou mot de passe incorrect";
                else {
                    router.push("/socialMedia");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%" }}>
            <Header />
            <form
                method="POST"
                id="loginForm"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "65vh", justifyContent: "center" }}
            >
                <h1 className={style.title}> Connectez-vous ! </h1>
                <InputGroup name="email" id="email" type="email" icon={faEnvelope} label="Adresse e-mail" />
                <InputGroup name="password" id="password" type="password" icon={faKey} label="Mot de passe" />
                <span className={style.errorHandler} id="errorHandler"></span>
                <InputGroup id="submit" type="submit" value="Connexion" onClick={handleSubmit} />
                <p>
                    Pas de compte ?
                    <Link href="/signup">
                        <a className={style.link}> Inscrit toi !</a>
                    </Link>
                </p>
            </form>

            <Footer />
        </div>
    );
}
