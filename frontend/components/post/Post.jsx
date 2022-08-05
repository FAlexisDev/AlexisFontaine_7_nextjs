import React, { useContext } from "react";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostManagement } from "../postManagement";
import style from "./style.module.scss";
import { useState } from "react";
import { ModifyPost } from "../modifyPost";
import { ModifyContext } from "../../utils/modifyContext";
import { faBars, faImage, faPaperPlane, faCircleUser, faEllipsis, faComments, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Post = (props) => {
    console.log(props);
    const [click, setClick] = useState(false);
    const [isLiked, setLike] = useState(false);
    const { value, setValue } = useContext(ModifyContext);
    const userId = JSON.parse(sessionStorage.getItem("userId"));

    const handleClick = () => {
        alert("Feature en cours de développement");
    };
    const data = { like: isLiked, userId: userId };

    const handleLike = () => {
        fetch(`http://localhost:4200/api/posts/${props.id}/like`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((res) => {
                setLike(!isLiked);
                console.error(res);
            })
            .catch((error) => console.log(error));
    };

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
            {props.image === "" ? "" : <img src={props.image} alt="" className={style.post__container__image} />}

            <div className={style.post__container__icons}>
                <div onClick={handleClick}>
                    <FontAwesomeIcon icon={props.icon.faComments} className={style.post__container__icons__comments} />
                    <p>Commentaires</p>
                </div>
                <div onClick={handleLike}>
                    <FontAwesomeIcon icon={props.icon.faHeart} className={style.post__container__icons__likes} />
                    <p>J'aime</p>
                </div>
            </div>
        </div>
    );
};
