import { React } from "react";
import Router from "next/router";
import { useEffect } from "react";

export default function Login() {
    useEffect(() => {
        Router.asPath === "/" ? Router.push("/login") : "";
    });

    return <div></div>;
}
