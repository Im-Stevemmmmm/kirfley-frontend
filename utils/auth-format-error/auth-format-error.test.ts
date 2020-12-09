import { formatError } from "./auth-format-error";

test("properly formats an auth error", () => {
    expect(formatError("some error")).toBe(` *some error`);
});
