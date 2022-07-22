import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";

const Post = (props) => {
    return (
        <div className={style.post__container}>
            <div className={style.post__container__header}>
                <div className={style.post__container__header__profile}>
                    <FontAwesomeIcon icon={props.icon.faCircleUser} className={style.post__container__header__profile__userIcon} />
                    <p>Alexis Fontaine</p>
                </div>
                <FontAwesomeIcon icon={props.icon.faEllipsis} className={style.post__container__header__dotsIcon} />
            </div>
            <p className={style.post__container__post}>{props.description}</p>
            <img src={props.image} alt="" className={style.post__container__image} />

            <div className={style.post__container__icons}>
                <div>
                    <FontAwesomeIcon icon={props.icon.faComments} className={style.post__container__icons__comments} />
                    <span>Commentaires</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={props.icon.faHeart} className={style.post__container__icons__likes} />
                    <span>J'aime</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
