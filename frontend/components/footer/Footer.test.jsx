import React from "react";
import { Footer } from "./Footer";
import { render } from "@testing-library/react";
import { useRouter } from "next/router";

describe("Footer Component", () => {
    test("Should footer return the great style when the pathname is /socialMedia", () => {
        render(<Footer />);
    });
});
