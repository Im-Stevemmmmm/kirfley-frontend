import { render } from "@testing-library/react";
import Footer from "components/footer/footer";

test("footer renders correctly", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
});

describe("about column", () => {
    it("is in the footer", () => {
        const { getByText } = render(<Footer />);
        const aboutColumn = getByText(/About/).parentElement;

        expect(aboutColumn).toBeInTheDocument;
    });

    it("has a company link", () => {
        const { getByText } = render(<Footer />);
        const aboutColumn = getByText(/About/).parentElement;

        expect(aboutColumn.children.item(1));
        expect(aboutColumn.children.item(1).textContent).toBe("Company");
    });

    it("has a business link", () => {
        const { getByText } = render(<Footer />);
        const aboutColumn = getByText(/About/).parentElement;

        expect(aboutColumn.children.item(2).textContent).toBe("Business");
    });
});

describe("support column", () => {
    it("is in the footer", () => {
        const { getByText } = render(<Footer />);
        const supportColumn = getByText(/Support/).parentElement;

        expect(supportColumn).toBeInTheDocument;
    });

    it("has a contact us link", () => {
        const { getByText } = render(<Footer />);
        const supportColumn = getByText(/Support/).parentElement;

        expect(supportColumn.children.item(1).textContent).toBe("Contact Us");
    });
});

describe("legal column", () => {
    it("is in the footer", () => {
        const { getByText } = render(<Footer />);
        const legalColumn = getByText(/Legal/).parentElement;

        expect(legalColumn).toBeInTheDocument;
    });

    it("has a privacy policy link", () => {
        const { getByText } = render(<Footer />);
        const legalColumn = getByText(/Legal/).parentElement;

        expect(legalColumn.children.item(1).textContent).toBe("Privacy Policy");
    });

    it("has a cookie policy link", () => {
        const { getByText } = render(<Footer />);
        const legalColumn = getByText(/Legal/).parentElement;

        expect(legalColumn.children.item(2).textContent).toBe("Cookie Policy");
    });

    it("has a copyright notice", () => {
        const { getByText } = render(<Footer />);
        const legalColumn = getByText(/Legal/).parentElement;

        expect(legalColumn.children.item(3).textContent).toBe(
            "\u00A9 Fern 2020"
        );
    });
});
