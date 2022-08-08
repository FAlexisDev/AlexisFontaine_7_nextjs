// Librairies and modules
import React from "react";
import Link from "next/link";

// Components and icons
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { InputGroup } from "../components/input";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";

// Styles (sass)
import style from "../styles/pages/Signup.module.scss";

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorHandler = document.querySelector("#errorHandler");
        const signupForm = document.querySelector("#signupForm");
        const formData = new FormData(signupForm);

        let data = {
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name"),
            lastName: formData.get("lastName"),
        };

        fetch("http://localhost:4200/api/auth/signup", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((res) => {
                res.status === 400
                    ? (errorHandler.innerText = "❌ Adresse e-mail déjà utilisée")
                    : (errorHandler.innerText = "✅ Votre compte a bien été crée merci de bien vouloir vous connectez.");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className={style.signupContainer}>
            <Header />
            <form method="POST" className={style.signupContainer__form} id="signupForm">
                <div className={style.backgroundcolor}>
                    <h1 className={style.signupContainer__form__title}> Inscrivez-vous! </h1>
                    <InputGroup name="name" id="name" type="text" icon={faUser} label="Prénom" />
                    <InputGroup name="lastName" id="lastName" type="text" icon={faUser} label="Nom" />
                    <InputGroup name="email" id="email" type="email" icon={faEnvelope} label="Adresse e-mail" />
                    <InputGroup name="password" id="password" type="password" icon={faKey} label="Mot de passe" />
                    <span className={style.signupContainer__form__errorHandler} id="errorHandler"></span>
                    <InputGroup id="submit" type="submit" value="S'inscrire" className="submitButton" onClick={handleSubmit} />
                    <p>
                        Déja inscrit ?
                        <Link href="/login">
                            <a className={style.signupContainer__form__link}> Connecte-toi !</a>
                        </Link>
                    </p>
                </div>
            </form>

            <Footer />
        </div>
    );
};

export default Signup;
