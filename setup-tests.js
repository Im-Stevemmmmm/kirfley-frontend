import "@testing-library/jest-dom/extend-expect";

const children = () => ({ children }) => children;

jest.mock("next/link", () => children());
jest.mock("next/head", () => children());

process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [],
        path: "/_next/image",
        loader: "default",
    },
};
