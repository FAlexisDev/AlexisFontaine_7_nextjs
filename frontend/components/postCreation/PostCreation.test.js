import React from "react";
import { PostCreation } from "./PostCreation";
import { render } from "@testing-library/react";

describe("PostCreation Component", () => {
    test("Should render the component", () => {
        render(<PostCreation />);
    });
});
