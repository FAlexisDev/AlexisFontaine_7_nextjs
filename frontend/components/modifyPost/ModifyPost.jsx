import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ModifyPost = (props) => {
    return (
        <div className={style.modifyPost}>
            <div className={style.modifyPost__headers}>
                <p>Modifier le post</p>
                <FontAwesomeIcon icon={props.icon.faXmark} className={style.modifyPost__headers__icon} />
            </div>
            <hr />
            <form action="POST" className={style.modifyPost__form}>
                <textarea
                    name="modifyPostDescription"
                    id="moifyPostDescription"
                    cols="30"
                    rows="4"
                    maxLength={200}
                    className={style.modifyPost__form__description}
                />

                <div className={style.modifyPost__form__button}>
                    <label htmlFor="file" className={style.modifyPost__form__button__file}>
                        <FontAwesomeIcon icon={props.icon.faImage} className={style.modifyPost__form__button__file__icon} />
                        <input type="file" id="file" className={style.modifyPost__form__button__file__input} />
                    </label>
                    <label htmlFor="submit" className={style.modifyPost__form__button__submit}>
                        <FontAwesomeIcon icon={props.icon.faPaperPlane} className={style.modifyPost__form__button__submit__icon} />
                        <input type="submit" value="" id="submit" className={style.modifyPost__form__button__submit__input} />
                    </label>
                </div>
            </form>
        </div>
    );
};
