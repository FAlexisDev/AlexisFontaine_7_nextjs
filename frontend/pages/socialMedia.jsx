import React from "react";
import { Input, Footer, Header, PostCreation } from "../components";
import { faBars, faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SocialMedia = () => {
    return (
        <div style={{ position: "relative", minHeight: "100vh", height: "100%", backgroundColor: "rgba(255,215,215,0.2)" }}>
            <Header icon={faBars} />
            <PostCreation icon={{ faImage, faPaperPlane }} />
            <Footer />
        </div>
    );
};

export default SocialMedia;
