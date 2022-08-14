// Librairies and modules
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { sortByDate } from "../utils/utils";

// Components and icons
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { PostCreation } from "../components/postCreation";
import { Post } from "../components/post";
import { ModifyContext } from "../utils/modifyContext";
import { Loader } from "../components/loader";
import { faBars, faImage, faPaperPlane, faCircleUser, faEllipsis, faComments, faHeart, faXmark, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { ModifyPost } from "../components/modifyPost";

// Styles
import style from "../styles/pages/SocialMedia.module.scss";

export const SocialMedia = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [userInfo, setUserInfos] = useState({});
    const [updateRequired, setUpdateRequired] = useState(false);
    const [value, setValue] = useState(false);

    useEffect(() => {
        const cookie = getCookie("access_token");
        if (cookie === undefined) {
            router.push("/login");
        }
    });

    useEffect(() => {
        fetch("http://localhost:4200/api/auth/getUsersInfos", { credentials: "include" })
            .then((res) => res.json())
            .then((userData) => setUserInfos(userData))
            .catch((error) => console.log(error));

        if (value) {
            window.scrollTo({ top: 0 });
        }
    }, []);

    useEffect(() => {
        setUpdateRequired(false);
        setLoading(true);

        fetch("http://localhost:4200/api/posts", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                data.sort(sortByDate);

                setData(data);
                setTimeout(() => {
                    setLoading(false);
                }, 200);
            })
            .catch((error) => console.log(error));
    }, [updateRequired]);

    const updatePostsList = () => {
        setUpdateRequired(true);
    };

    const updateData = (postId, updatedData) => {
        setData((data) => {
            return data.map((element) => {
                if (element.id === postId) {
                    return { ...element, ...updatedData };
                }
                return element;
            });
        });
    };

    return (
        <div className={style.socialMedia__container}>
            <Header icon={{ faBars, faXmark }} />{" "}
            <main>
                <ModifyContext.Provider value={{ value, setValue }}>
                    {value.state ? <ModifyPost icon={{ faImage, faPaperPlane, faXmark }} updatePosts={updatePostsList} /> : ""}

                    <PostCreation icon={{ faImage, faPaperPlane }} updatePosts={updatePostsList} userInfos={userInfo} />
                    {data.length === 0 && !isLoading ? <p style={{ textAlign: "center" }}>Aucun post à afficher</p> : ""}

                    {isLoading ? (
                        <Loader />
                    ) : (
                        data.map((post) => (
                            <Post
                                icon={{ faCircleUser, faEllipsis, faComments, faHeart, faCheckDouble }}
                                description={post.description}
                                image={post.imageUrl}
                                key={post.id}
                                id={post.id}
                                updatePosts={updatePostsList}
                                isLiked={post.isLiked}
                                like={post.like}
                                name={post.name}
                                lastName={post.lastName}
                                updateData={updateData}
                                createdAt={post.createdAt}
                                isOwner={post.isOwner}
                                isAdmin={post.isAdmin}
                            />
                        ))
                    )}
                </ModifyContext.Provider>
            </main>
            <Footer />
        </div>
    );
};
export default SocialMedia;
