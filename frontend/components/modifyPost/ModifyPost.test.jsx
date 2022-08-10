import React from "react";
import { ModifyPost } from "./ModifyPost";
import { render } from "@testing-library/react";

describe("ModifyPost Component", () => {
    test("Should render the component", () => {
        render(<ModifyPost />);
    });
});
