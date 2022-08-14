import React from "react";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostManagement } from "../postManagement";
import Image from "next/image";
import style from "./post.module.scss";
import dateFormat from "dateFormat";
import { useState } from "react";

export const Post = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        alert("Feature en cours de développement");
    };

    const onKeyUp = (e) => {
        if (e.key === "Enter" && e.target.id === "navPost") setClick(!click);
        if (e.key === "Enter" && e.target.id === "comments") handleClick();
        if (e.key === "Enter" && e.target.id === "like") handleLike();
    };

    const handleLike = () => {
        fetch(`http://localhost:4200/api/posts/${props.id}/like`, { credentials: "include" })
            .then((res) => {
                return res.json();
            })
            .then((likeData) => {
                props.updateData(props.id, { like: likeData.data.likeCount, isLiked: !props.isLiked });
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className={style.post__container}>
            <div className={style.post__container__header} id="post__container__header">
                <div className={style.post__container__header__profile}>
                    <FontAwesomeIcon icon={props.icon.faCircleUser} className={style.post__container__header__profile__userIcon} role="img" />
                    <div className={style.userInfos}>
                        <p className={style.post__container__header__profile__name}>{props.name + " " + props.lastName}</p>
                        {props.isAdmin ? (
                            <FontAwesomeIcon icon={props.icon.faCheckDouble} title="Admin" className={style.post__container__header__profile__adminIcon} />
                        ) : (
                            ""
                        )}
                    </div>

                    <p className={style.date}>{dateFormat(new Date(props.createdAt), "ddd mmmm yy - HH:MM")}</p>
                </div>
                {props.isOwner ? (
                    <FontAwesomeIcon
                        icon={props.icon.faEllipsis}
                        className={style.post__container__header__dotsIcon}
                        id="navPost"
                        onClick={() => setClick(!click)}
                        role="button"
                        aria-pressed="false"
                        tabIndex={0}
                        onKeyUp={onKeyUp}
                    />
                ) : (
                    ""
                )}

                {click ? (
                    <span id="postManagement" className={style.post__container__header__postManagement}>
                        <PostManagement icon={{ faTrash, faPenToSquare }} postId={props.id} updatePosts={props.updatePosts} description={props.description} />
                    </span>
                ) : (
                    ""
                )}
            </div>
            <p className={style.post__container__post}>{props.description}</p>
            {props.image === "" ? "" : <img src={props.image} alt="Image du poste" className={style.post__container__image} />}

            <div className={style.post__container__icons}>
                <div onClick={handleClick} className={style.commentDiv} role="button" tabIndex={0} id="comments" onKeyUp={onKeyUp}>
                    <FontAwesomeIcon icon={props.icon.faComments} className={style.post__container__icons__comments} />
                    <p>Commentaires</p>
                </div>
                <div onClick={handleLike} className={style.likeDiv} role="button" tabIndex={0} id="like" onKeyUp={onKeyUp}>
                    <FontAwesomeIcon icon={props.icon.faHeart} className={props.isLiked ? style.post__container__icons__likes : ""} id="likeIcon" />
                    <p>{props.like}</p>
                    <p>J'aime</p>
                </div>
            </div>
        </div>
    );
};
