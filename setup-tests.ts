import 'jest';

const getChildren = () => {
  return ({ children }) => {
    return children;
  };
};

jest.mock('next/link', () => getChildren());
jest.mock('next/head', () => getChildren());
