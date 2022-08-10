import React from "react";
import { PostManagement } from "./PostManagement";
import { render } from "@testing-library/react";

describe("PostManagement Component", () => {
    test("Should render the component", () => {
        render(<PostManagement />);
    });
});
