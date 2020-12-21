import { fireEvent, render } from "@testing-library/react";
import { HomeSidebar } from "./sidebar";

describe("home sidebar", () => {
    it("has a home button", () => {
        const { getByText } = render(<HomeSidebar />);

        const homeButton = getByText(/home/i);

        expect(homeButton).toBeInTheDocument;
    });
});
