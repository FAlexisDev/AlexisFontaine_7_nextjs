import React from "react";
import style from "./postCreation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export const PostCreation = (props) => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const imgName = document.querySelector("#imgName");
        const postCreationForm = document.querySelector("#postCreationForm");
        const fileUploader = document.querySelector("#fileUploader");
        const formData = new FormData(postCreationForm);
        const userId = JSON.parse(sessionStorage.getItem("userId"));
        const array = [];
        const data = new FormData();

        if (formData.get("file").size !== 0) {
            data.append("file", formData.get("file"));
        }
        data.append("userId", userId);
        data.append("description", formData.get("post"));
        data.append("usersLiked", array);

        fetch("http://localhost:4200/api/posts", {
            headers: {
                Accept: "application/json",
            },
            credentials: "include",
            method: "POST",
            body: data,
        })
            .then((res) => {
                props.updatePosts();
                postCreationForm.reset();
                fileUploader.value = "";
                imgName.innerText = "";
                console.log(res);
            })
            .catch((error) => console.log(error));
    };

    const handleChange = (e) => {
        e.preventDefault();
        const postCreationForm = document.querySelector("#postCreationForm");
        const formData = new FormData(postCreationForm);
        const imgName = document.querySelector("#imgName");

        imgName.innerText = formData.get("file").name;
    };
    return (
        <div className={style.content__container}>
            <p> Bonjour {props.userInfos.name} ! Que se passe-t-il ? 👋</p>
            <form method="POST" className={style.content__container__form} id="postCreationForm">
                <textarea name="post" id={style.post__content} cols="30" rows="6" placeholder="Ecrivez votre publication ici !" maxLength={200}></textarea>
                <span id={style.post__content__lenght}> max.200</span>
                <div className={style.content__container__icons}>
                    <label htmlFor="fileUploader">
                        <FontAwesomeIcon icon={props.icon.faImage} className={style.content__container__icons__image} />
                        <input type="file" className={style.content__container__icons__fileUploader} id="fileUploader" name="file" onChange={handleChange} />
                        <span className={style.imgName} id="imgName"></span>
                    </label>
                    <label htmlFor="submit" className={style.content__container__icons__label}>
                        <FontAwesomeIcon icon={props.icon.faPaperPlane} className={style.content__container__icons__paperPlane} />
                        <input type="submit" id="submit" className={style.content__container__icons__submitButton} onClick={handleSubmit} value="Publier" />
                    </label>
                </div>
            </form>
        </div>
    );
};
