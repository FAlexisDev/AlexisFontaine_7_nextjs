import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostCreation = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = JSON.parse(sessionStorage.getItem("userId"));
        const postCreationForm = document.querySelector("#postCreationForm");
        const formData = new FormData(postCreationForm);

        let data = {
            userId: userId,
            description: formData.get("post"),
            usersLiked: [],
            imageUrl: formData.get("file").name,
        };

        const createPost = async () => {
            await fetch("http://localhost:4200/api/posts", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            });
        };
        createPost();
    };
    return (
        <div className={style.content__container}>
            <p> Hey 'user' Que ce passe-t-il ? </p>
            <form method="POST" className={style.content__container__form} id="postCreationForm">
                <textarea name="post" id={style.post__content} cols="30" rows="5" placeholder="Ecrivez votre publication ici !" maxLength={200}></textarea>
                <span id={style.post__content__lenght}> max.200</span>
                <div className={style.content__container__icons}>
                    <label htmlFor="fileUploader">
                        <FontAwesomeIcon icon={props.icon.faImage} className={style.content__container__icons__image} />
                        <input type="file" className={style.content__container__icons__fileUploader} id="fileUploader" name="file" />
                    </label>
                    <label htmlFor="submit" className={style.content__container__icons__label}>
                        <FontAwesomeIcon icon={props.icon.faPaperPlane} className={style.content__container__icons__paperPlane} />
                        <input type="submit" id="sumit" className={style.content__container__icons__submitButton} onClick={handleSubmit} value="" />
                    </label>
                </div>
            </form>
        </div>
    );
};
