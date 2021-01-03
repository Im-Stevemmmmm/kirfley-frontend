import { WEBSITE_NAME } from "./constants";

describe("global constants", () => {
    describe("website name", () => {
        it("should equal Kirfley", () => {
            expect(WEBSITE_NAME).toEqual("Kirfley");
        });
    });
});
