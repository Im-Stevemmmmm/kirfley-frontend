import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import Index from "pages";

test("renders correctly", () => {
    const { container } = render(
        <MockedProvider>
            <Index />
        </MockedProvider>
    );

    expect(container).toMatchSnapshot();
});
