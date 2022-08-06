import React, { useRef } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { PostCreation } from "../components/postCreation";
import { Post } from "../components/post";
import { ModifyContext } from "../utils/modifyContext";
import { Loader } from "../components/loader";
import { setCookie, getCookie } from "cookies-next";
import { faBars, faImage, faPaperPlane, faCircleUser, faEllipsis, faComments, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ModifyPost } from "../components/modifyPost";

const SocialMedia = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [userInfo, setUserInfos] = useState({});
    const [updateRequired, setUpdateRequired] = useState(false);
    const [value, setValue] = useState(false);

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
    useEffect(() => {
        if (value) {
            window.scrollTo({ top: 0 });
        }
    });
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
    }, []);
    useEffect(() => {
        setUpdateRequired(false);
        setLoading(true);

        fetch("http://localhost:4200/api/posts", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
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

    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%", backgroundColor: "rgba(255,215,215,0.2)" }}>
            <ModifyContext.Provider value={{ value, setValue }}>
                {value.state ? <ModifyPost icon={{ faImage, faPaperPlane, faXmark }} updatePosts={updatePostsList} /> : ""}
                <Header icon={{ faBars, faXmark }} />
                <PostCreation icon={{ faImage, faPaperPlane }} updatePosts={updatePostsList} userInfos={userInfo} />
                {data.length === 0 && !isLoading ? <p style={{ textAlign: "center" }}>Aucun post à afficher</p> : ""}

                {isLoading ? (
                    <Loader />
                ) : (
                    data.map((post) => (
                        <Post
                            icon={{ faCircleUser, faEllipsis, faComments, faHeart }}
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
                        />
                    ))
                )}
            </ModifyContext.Provider>

            <Footer />
        </div>
    );
};
export default SocialMedia;
