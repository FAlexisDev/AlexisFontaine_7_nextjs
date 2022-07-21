import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostCreation = (props) => {
    console.log(props);
    return (
        <div className={style.content__container}>
            <p> Hey 'user' Que ce passe-t-il ? </p>
            <form action="POST" className={style.content__container__form}>
                <textarea name="post" id={style.post__content} cols="30" rows="5" placeholder="Ecrivez votre publication ici !" maxLength={200}></textarea>
                <span id={style.post__content__lenght}> max.200</span>
                <div className={style.content__container__icons}>
                    <FontAwesomeIcon icon={props.icon.faImage} className={style.content__container__icons__image} />
                    <FontAwesomeIcon icon={props.icon.faPaperPlane} className={style.content__container__icons__paperPlane} />
                </div>
            </form>
        </div>
    );
};

export default PostCreation;
