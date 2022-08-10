import React from "react";
import { InputGroup } from "./Input";
import { render } from "@testing-library/react";

describe("Input Component", () => {
    test("Should render the component", () => {
        render(<InputGroup />);
    });
});
