import React from "react";
import style from "./loader.module.scss";

export const Loader = () => {
    return (
        <div className={style.container}>
            <div className={style.container__loader} role="alert" aria-busy="true"></div>
        </div>
    );
};
