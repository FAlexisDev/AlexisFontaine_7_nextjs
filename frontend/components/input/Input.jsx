import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputGroup = (props) => {
    return (
        <div className={style.input__container}>
            {props.type === "submit" ? (
                <input
                    type={props.type}
                    id={props.id}
                    className={style.input__container__submit}
                    value={props.value}
                    onClick={props.onClick}
                    name={props.name}
                />
            ) : (
                <label htmlFor={props.id}>
                    {props.label}
                    <input type={props.type} id={props.id} className={style.input__container__contact} name={props.name} />
                    <FontAwesomeIcon icon={props.icon} className={style.input__container__icon} name={props.name} />
                </label>
            )}
        </div>
    );
};

export default InputGroup;
