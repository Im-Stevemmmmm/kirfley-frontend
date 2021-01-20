import { capatilizeString } from "./capatilize-string";

describe("capatilize string", () => {
  it("capitilizes the first letter of a string", () => {
    expect(capatilizeString("abc")).toBe("Abc");
  });
});
