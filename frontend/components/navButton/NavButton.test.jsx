import React from "react";
import { NavButton } from "./NavButton";
import { render } from "@testing-library/react";

describe("NavButton Component", () => {
    test("Should render the component", () => {
        render(<NavButton />);
    });
});
