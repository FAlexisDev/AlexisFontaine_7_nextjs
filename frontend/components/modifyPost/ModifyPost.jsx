import React, { useContext, useState } from "react";
import style from "./modifypost.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModifyContext } from "../../utils/modifyContext";

export const ModifyPost = (props) => {
    const { value, setValue } = useContext(ModifyContext);
    const [textArea, setTextArea] = useState("");
    const [file, setFile] = useState("");

    const handleChange = (e) => {
        const fileName = document.querySelector("#imgName");
        setFile(e.target.files[0]);
        fileName.innerText = e.target.files[0].name;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        const userId = JSON.parse(sessionStorage.getItem("userId"));
        const errorHandler = document.querySelector("#errorHandler");

        data.append("userId", userId);
        data.append("file", file);
        data.append("description", textArea);
        data.get("description") || data.get("file")
            ? fetch(`http://localhost:4200/api/posts/${value.modifiedPostId}`, {
                  headers: {
                      Accept: "application/json",
                  },
                  credentials: "include",
                  method: "PUT",
                  body: data,
              })
                  .then((res) => {
                      props.updatePosts();
                      setValue({ modifiedPostId: "", state: !value });
                      errorHandler.innerText = "✅ Post modifié ! ";
                      console.log(res);
                  })
                  .catch((error) => {
                      errorHandler.innerText = " ⛔Post non modifié !";
                      console.log(error);
                  })
            : (errorHandler.innerText = " ⛔ Champs vides ou incorrectes ");
    };
    console.log(props.description);
    return (
        <div className={style.backgroundColor}>
            <span className={style.errorHandler} id="errorHandler"></span>
            <div className={style.modifyPost}>
                <div className={style.modifyPost__headers}>
                    <p>Modifier le post</p>
                    <FontAwesomeIcon
                        icon={props.icon.faXmark}
                        className={style.modifyPost__headers__icon}
                        onClick={() => setValue(false)}
                        role="button"
                        tabIndex={0}
                    />
                </div>
                <hr />
                <form method="POST" className={style.modifyPost__form} id="formPost">
                    <textarea
                        name="modifyPostDescription"
                        id="moifyPostDescription"
                        cols="30"
                        rows="4"
                        maxLength={200}
                        className={style.modifyPost__form__description}
                        defaultValue={value.description}
                        onChange={(e) => setTextArea(e.target.value)}
                        aria-label="Description du poste"
                        role="textbox"
                    />

                    <div className={style.modifyPost__form__button}>
                        <label htmlFor="file" className={style.modifyPost__form__button__file} tabIndex="0">
                            <FontAwesomeIcon icon={props.icon.faImage} className={style.modifyPost__form__button__file__icon} role="img" />
                            <input type="file" id="file" className={style.modifyPost__form__button__file__input} onChange={handleChange} role="button" />
                            <span className={style.imgName} id="imgName"></span>-
                        </label>
                        <label htmlFor="submit" className={style.modifyPost__form__button__submit} tabIndex="0">
                            <FontAwesomeIcon icon={props.icon.faPaperPlane} className={style.modifyPost__form__button__submit__icon} role="img" />
                            <input
                                type="submit"
                                value="-"
                                id="submit"
                                className={style.modifyPost__form__button__submit__input}
                                onClick={handleSubmit}
                                role="button"
                            />
                            -
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};
