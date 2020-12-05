import { formatError } from "./auth-format-error";

test("properly formats an auth error", () => {
    const error = "some error";

    expect(formatError(error)).toBe(` *${error}`);
});
