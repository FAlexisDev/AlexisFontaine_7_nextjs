import React from "react";
import { Loader } from "./Loader";
import { getByRole, render } from "@testing-library/react";

describe("Loader Component", () => {
    test("Should render the component", () => {
        let renderingComponent = render(<Loader />);
        let componentStyle = renderingComponent.getByRole("alert").className;

        expect(componentStyle).toContain("container__loader");
    });
});
