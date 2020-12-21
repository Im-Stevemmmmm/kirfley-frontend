import { render } from "@testing-library/react";
import { HomeNavbar } from "./navbar";

describe("Home navbar", () => {
    it("has an index button", () => {
        const { getByAltText } = render(<HomeNavbar />);

        const indexButton = getByAltText("index button");

        expect(indexButton).toBeInTheDocument;
    });
});
