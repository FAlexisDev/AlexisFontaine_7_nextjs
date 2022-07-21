import React from "react";
import { Input, Footer, Header } from "../components";
import Link from "next/link";
// import style from "../styles";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
    // Voir différences entre : "link" -- "useRouter()"
    // const router = useRouter();
    // const handleClick = () => {
    //     router.push("/account/signin");
    // };
    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%" }}>
            <Header />

            <form
                action="POST"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "65vh", justifyContent: "center" }}
            >
                <Input name="Adresse e-mail" id="email" type="email" icon={faEnvelope} />
                <Input name="Mot de passe" id="password" type="password" icon={faKey} />
                <Input id="submit" type="submit" value="Connexion" />
                <p>
                    Pas de compte ?
                    <Link href="/account/signin">
                        <a style={{ color: "#fd2d01" }}> Inscrit toi !</a>
                    </Link>
                </p>
            </form>

            <Footer />
        </div>
    );
}
