import 'jest';

const getChildren = () => {
    return ({ children }) => {
        return children;
    };
};

jest.mock('next/link', () => getChildren());
jest.mock('next/head', () => getChildren());

process.env = {
    ...process.env,
    __NEXT_IMAGE_OPTS: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        imageSizes: [],
        path: '/_next/image',
        loader: 'default',
    },
};
