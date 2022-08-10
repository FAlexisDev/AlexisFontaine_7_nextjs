import React from "react";
import { Post } from "./Post";
import { render } from "@testing-library/react";

describe("Post Component", () => {
    test("Should render the component", () => {
        render(<Post />);
    });
});
