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
    const formValidaton = (data) => {
        const regex = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            name: /^\D+$/,
            lastName: /^\D+$/,
            password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        };

        if (regex.email.test(data.email) && regex.name.test(data.name) && regex.lastName.test(data.lastName) && regex.password.test(data.password)) {
            return true;
        } else {
            return false;
        }
    };

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
        if (formValidaton(data)) {
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
        } else {
            errorHandler.innerText =
                "❌ Merci de bien vérifier vos informations. Le mot de passe doit faire au minimum 8 caractères et contenir une majuscule, une minuscule et un chiffre.";
        }
    };

    return (
        <div className={style.signupContainer}>
            <Header />
            <main>
                <form method="POST" className={style.signupContainer__form} id="signupForm">
                    <div className={style.backgroundcolor}>
                        <h2 className={style.signupContainer__form__title}> Inscrivez-vous! </h2>
                        <InputGroup name="name" id="name" type="text" icon={faUser} label="Prénom" />
                        <InputGroup name="lastName" id="lastName" type="text" icon={faUser} label="Nom" />
                        <InputGroup name="email" id="email" type="email" icon={faEnvelope} label="Adresse e-mail" />
                        <InputGroup name="password" id="password" type="password" icon={faKey} label="Mot de passe" />
                        <span className={style.signupContainer__form__errorHandler} id="errorHandler"></span>
                        <InputGroup id="submit" type="submit" value="S'inscrire" className="submitButton" onClick={handleSubmit} />
                        <p>
                            Déja inscrit ?
                            <Link href="/login">
                                <a className={style.signupContainer__form__link} role="link">
                                    Connecte-toi !
                                </a>
                            </Link>
                        </p>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
};

export default Signup;
