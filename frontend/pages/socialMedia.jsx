import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { PostCreation } from "../components/postCreation";
import { Post } from "../components/post";
import { faBars, faImage, faPaperPlane, faCircleUser, faEllipsis, faComments, faHeart } from "@fortawesome/free-solid-svg-icons";

const SocialMedia = ({ posts }) => {
    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%", backgroundColor: "rgba(255,215,215,0.2)" }}>
            <Header icon={faBars} />
            <PostCreation icon={{ faImage, faPaperPlane }} />
            {posts.map((post) => (
                <Post icon={{ faCircleUser, faEllipsis, faComments, faHeart }} description={post.description} image={post.imageUrl} />
            ))}

            <Footer />
        </div>
    );
};
export async function getServerSideProps() {
    const postsData = await fetch("http://localhost:4200/api/posts").then((res) => res.json());

    return {
        props: {
            posts: postsData,
        },
    };
}
export default SocialMedia;
