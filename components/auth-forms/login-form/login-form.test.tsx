import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { fireEvent, render } from "@testing-library/react";
import {
    LoginDocument,
    LoginMutation,
    LoginMutationVariables,
} from "generated/graphql-types";
import LoginForm from "./login-form";

test("renders correctly", () => {
    const { container } = render(
        <MockedProvider>
            <LoginForm />
        </MockedProvider>
    );

    expect(container).toMatchSnapshot();
});

test("username or email input is displayed", () => {
    const { getByLabelText } = render(
        <MockedProvider>
            <LoginForm />
        </MockedProvider>
    );
    const usernameInput = getByLabelText(/Username or Email/i);

    expect(usernameInput).toBeInTheDocument;
});

test("password input is displayed", () => {
    const { getByLabelText } = render(
        <MockedProvider>
            <LoginForm />
        </MockedProvider>
    );
    const passwordInput = getByLabelText(/Password/i);

    expect(passwordInput).toBeInTheDocument;
});

test("logs user in on submit and redirects to /home", () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");

    useRouter.mockImplementation(() => ({
        route: "",
        basePath: "",
        pathname: "e",
        query: {},
        asPath: "",
        push: async () => true,
        replace: async () => true,
        reload: () => null,
        back: () => null,
        prefetch: async () => undefined,
        beforePopState: () => null,
        isFallback: false,
        events: {
            on: () => null,
            off: () => null,
            emit: () => null,
        },
    }));

    const usernameOrEmail = "Steve";
    const password = "12345";

    const apiMocks: MockedResponse<Record<string, any>>[] = [
        {
            request: {
                query: LoginDocument,
                variables: {
                    usernameOrEmail,
                    password,
                } as LoginMutationVariables,
            },
            result: {
                data: {
                    login: {
                        successful: true,
                    },
                } as LoginMutation,
            },
        },
    ];

    const { getByText, getByLabelText } = render(
        <MockedProvider mocks={apiMocks}>
            <LoginForm />
        </MockedProvider>
    );
    const usernameOrEmailInput = getByLabelText(/Username or Email/i);
    const passwordInput = getByLabelText(/Password/i);
    const submitButton = getByText(/Log in/i, { selector: "button" });

    fireEvent.change(usernameOrEmailInput, {
        target: { value: usernameOrEmail },
    });
    fireEvent.change(passwordInput, { target: { value: password } });

    fireEvent.click(submitButton);

    expect(useRouter).toHaveBeenCalled();
});
