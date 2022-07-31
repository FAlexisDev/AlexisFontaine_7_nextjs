import React from "react";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostManagement } from "../postManagement";
import style from "./style.module.scss";
import { useState } from "react";

export const Post = (props) => {
    const [click, setClick] = useState(false);

    return (
        <div className={style.post__container}>
            <div className={style.post__container__header} id="post__container__header">
                <div className={style.post__container__header__profile}>
                    <FontAwesomeIcon icon={props.icon.faCircleUser} className={style.post__container__header__profile__userIcon} />
                    <p>Alexis Fontaine</p>
                </div>
                <FontAwesomeIcon icon={props.icon.faEllipsis} className={style.post__container__header__dotsIcon} onClick={() => setClick(!click)} />
                {click ? (
                    <span id="postManagement" className={style.post__container__header__postManagement}>
                        <PostManagement icon={{ faTrash, faPenToSquare }} postId={props.id} updatePosts={props.updatePosts} />
                    </span>
                ) : (
                    ""
                )}
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
