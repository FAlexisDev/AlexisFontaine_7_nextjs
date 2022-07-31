import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { ModifyPost } from "../modifyPost";
import { faImage, faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";

export const PostManagement = (props) => {
    const [click, setClick] = useState(false);

    const handleClickDelete = () => {
        fetch(`http://localhost:4200/api/posts/${props.postId}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            method: "DELETE",
        })
            .then((res) => {
                props.updatePosts();
                console.log(res);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className={style.options__container}>
            <div className={style.options__container__option} onClick={() => setClick(!click)}>
                <FontAwesomeIcon icon={props.icon.faPenToSquare} className={style.options__container__option__icon} />
                <p>Modifier</p>
            </div>
            {click ? (
                <span>
                    <ModifyPost icon={{ faImage, faPaperPlane, faXmark }} />
                </span>
            ) : (
                ""
            )}
            <div className={style.options__container__option} onClick={handleClickDelete}>
                <FontAwesomeIcon icon={props.icon.faTrash} className={style.options__container__option__icon} />
                <p>Supprimer</p>
            </div>
        </div>
    );
};
