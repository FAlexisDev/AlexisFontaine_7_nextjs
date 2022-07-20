import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputGroup = (props) => {
    return (
        <div className={style.input__container}>
            {props.type === "submit" ? (
                <input type={props.type} id={props.id} className={style.input__container__submit} value={props.value} />
            ) : (
                <label htmlFor={props.id}>
                    {props.name}
                    <input type={props.type} id={props.id} className={style.input__container__contact} />
                    <FontAwesomeIcon icon={props.icon} className={style.input__container__icon} />
                </label>
            )}
        </div>
    );
};

export default InputGroup;
