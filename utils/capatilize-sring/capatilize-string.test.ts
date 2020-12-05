import { capatilizeString } from "./capatilize-string";

test("capatilizes the first letter of a string", () => {
    expect(capatilizeString("abc")).toBe("Abc");
});
