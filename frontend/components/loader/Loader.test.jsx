import React from "react";
import { Loader } from "./Loader";
import { render } from "@testing-library/react";

describe("Loader Component", () => {
    test("Should render the component", () => {
        render(<Loader />);
    });
});
