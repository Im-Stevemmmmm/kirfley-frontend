import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import Signup from "pages/signup";

test("renders correctly", () => {
    const { container } = render(
        <MockedProvider>
            <Signup />
        </MockedProvider>
    );

    expect(container).toMatchSnapshot();
});
