import React from "react";
import { InputGroup } from "./Input";
import { render } from "@testing-library/react";

describe("Input Component", () => {
    // props type submit
    test("Should render the component when props.types = submit", () => {
        const inputRender = render(<InputGroup type="submit" />);
        const inputComponent = inputRender.getByRole("button");

        expect(inputComponent.className).toBe("input__container__submit");
    });

    // props type !submit
    test("Should render the component when props.types != submit", () => {
        const inputRender = render(<InputGroup type="" />);
        const inputComponent = inputRender.getByRole("textbox");

        expect(inputComponent.className).toBe("input__container__contact");
    });
});
