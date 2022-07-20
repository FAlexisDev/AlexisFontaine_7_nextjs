import React from "react";
import { Footer, Header, Input } from "../../components";
import Link from "next/link";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%" }}>
            <Header />
            <form
                action="POST"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "60vh", justifyContent: "center" }}
            >
                <Input name="Prénom" id="name" type="text" icon={faUser} />
                <Input name="Nom" id="lastName" type="text" icon={faUser} />
                <Input name="Adresse e-mail" id="email" type="email" icon={faEnvelope} />
                <Input name="Mot de passe" id="password" type="password" icon={faKey} />
                <Input id="submit" type="submit" value="S'inscrire" />
                <p>
                    Déja inscrit ?
                    <Link href="/">
                        <a style={{ color: "#fd2d01" }}> Connecte-toi !</a>
                    </Link>
                </p>
            </form>

            <Footer />
        </div>
    );
};

export default Signin;
