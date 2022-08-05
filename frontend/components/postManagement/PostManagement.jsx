import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.scss";
import { ModifyPost } from "../modifyPost";
import { ModifyContext } from "../../utils/modifyContext";
import { faImage, faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";

export const PostManagement = (props) => {
    const { value, setValue } = useContext(ModifyContext);
    const handleClickDelete = () => {
        fetch(`http://localhost:4200/api/posts/${props.postId}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            method: "DELETE",
        })
            .then(() => {
                props.updatePosts();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className={style.options__container}>
            <div className={style.options__container__option} onClick={() => setValue({ modifiedPostId: props.postId, state: !value.state })}>
                <FontAwesomeIcon icon={props.icon.faPenToSquare} className={style.options__container__option__icon} />
                <p>Modifier</p>
            </div>

            <div className={style.options__container__option} onClick={handleClickDelete}>
                <FontAwesomeIcon icon={props.icon.faTrash} className={style.options__container__option__icon} />
                <p>Supprimer</p>
            </div>
        </div>
    );
};
