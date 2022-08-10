import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";

describe("Header Component", () => {
    test("Should click change value when user click on NavButton", () => {
        render(<Header />);
    });
});
