import React from "react";
import style from "./input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputGroup = (props) => {
    return (
        <div className={style.input__container} id="inputContainer">
            {props.type === "submit" ? (
                <input
                    type={props.type}
                    id={props.id}
                    className={style.input__container__submit}
                    value={props.value}
                    onClick={props.onClick}
                    name={props.name}
                    role="button"
                    aria-pressed="false"
                />
            ) : (
                <label htmlFor={props.id} id="inputLabel">
                    {props.label}
                    <input
                        type={props.type}
                        id={props.id}
                        className={style.input__container__contact}
                        name={props.name}
                        role="textbox"
                        contenteditable="true"
                        aria-labelledby={props.id}
                    />
                    <FontAwesomeIcon
                        icon={props.icon}
                        className={style.input__container__icon}
                        name={props.name}
                        role="img"
                        aria-label={"Icon" + "" + props.type}
                    />
                </label>
            )}
        </div>
    );
};
