import React from "react";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostManagement } from "../postManagement";
import style from "./post.module.scss";
import dateFormat from "dateFormat";
import { useState } from "react";

export const Post = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        alert("Feature en cours de développement");
    };

    const handleLike = () => {
        fetch(`http://localhost:4200/api/posts/${props.id}/like`, { credentials: "include" })
            .then((res) => {
                return res.json();
            })
            .then((likeData) => {
                props.updateData(props.id, { like: likeData.data.likeCount, isLiked: !props.isLiked });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className={style.post__container}>
            <div className={style.post__container__header} id="post__container__header">
                <div className={style.post__container__header__profile}>
                    <FontAwesomeIcon icon={props.icon.faCircleUser} className={style.post__container__header__profile__userIcon} />
                    <p className={style.post__container__header__profile__name}>{props.name + " " + props.lastName}</p>
                    <p className={style.date}>{dateFormat(new Date(props.createdAt), "ddd mmmm yy - HH:MM")}</p>
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
            {props.image === "" ? "" : <img src={props.image} alt="" className={style.post__container__image} />}

            <div className={style.post__container__icons}>
                <div onClick={handleClick}>
                    <FontAwesomeIcon icon={props.icon.faComments} className={style.post__container__icons__comments} />
                    <p>Commentaires</p>
                </div>
                <div onClick={handleLike}>
                    <FontAwesomeIcon icon={props.icon.faHeart} className={props.isLiked ? style.post__container__icons__likes : ""} id="likeIcon" />
                    <p>{props.like}</p>
                    <p>J'aime</p>
                </div>
            </div>
        </div>
    );
};
