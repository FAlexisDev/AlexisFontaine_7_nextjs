// Librairies and modules
import { React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Components and icons
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { InputGroup } from "../components/input";
import { faEnvelope, faKey, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Styles (sass)
import style from "../styles/pages/Login.module.scss";

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
                if (res.status === 400) errorHandler.innerText = "❌ Adresse e-mail ou mot de passe incorrect";
                else {
                    router.push("/socialMedia");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={style.loginContainer}>
            <Header icon={{ faBars, faXmark }} />
            <main>
                <form method="POST" id="loginForm" className={style.loginContainer__form}>
                    <div className={style.backgroundcolor}>
                        <h2 className={style.loginContainer__form__title}> Connectez-vous ! </h2>
                        <InputGroup name="email" id="email" type="email" icon={faEnvelope} label="Adresse e-mail" />
                        <InputGroup name="password" id="password" type="password" icon={faKey} label="Mot de passe" />
                        <span className={style.loginContainer__form__errorHandler} id="errorHandler"></span>
                        <InputGroup id="submit" type="submit" value="Connexion" onClick={handleSubmit} />
                        <p>
                            Pas de compte ?
                            <Link href="/signup">
                                <a className={style.loginContainer__form__link} role="link">
                                    {" "}
                                    Inscrit toi !
                                </a>
                            </Link>
                        </p>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
}
