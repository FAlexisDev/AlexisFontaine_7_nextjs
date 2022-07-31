import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { PostCreation } from "../components/postCreation";
import { Post } from "../components/post";

import { setCookie, getCookie } from "cookies-next";
import { faBars, faImage, faPaperPlane, faCircleUser, faEllipsis, faComments, faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SocialMedia = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [updateRequired, setUpdateRequired] = useState(false);

    useEffect(() => {
        const cookie = getCookie("access_token");
        if (cookie === undefined) {
            router.push("/login");
        }
    });
    useEffect(() => {
        setUpdateRequired(false);
        fetch("http://localhost:4200/api/posts", { credentials: "include" }).then((res) =>
            res
                .json()
                .then((data) => setData(data))
                .catch((error) => console.log(error))
        );
    }, [updateRequired]);

    const updatePostsList = () => {
        setUpdateRequired(true);
    };
    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%", backgroundColor: "rgba(255,215,215,0.2)" }}>
            <Header icon={{ faBars, faXmark }} />
            <PostCreation icon={{ faImage, faPaperPlane }} updatePosts={updatePostsList} />
            {data.map((post) => (
                <Post
                    icon={{ faCircleUser, faEllipsis, faComments, faHeart }}
                    description={post.description}
                    image={post.imageUrl}
                    key={post._id}
                    id={post._id}
                    updatePosts={updatePostsList}
                />
            ))}

            <Footer />
        </div>
    );
};
export default SocialMedia;
