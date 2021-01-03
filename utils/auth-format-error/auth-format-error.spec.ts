import { formatError } from "./auth-format-error";

describe("auth format error", () => {
    it("properly formats an auth error", () => {
        expect(formatError("some error")).toBe(" *some error");
    });
});
