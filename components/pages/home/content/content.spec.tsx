import { render } from "@testing-library/react";
import { HomeContent } from "./content";

describe("home content", () => {
    it("has atleast 5 content cards", () => {
        render(<HomeContent />);
    });
});
