import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { fireEvent, render, waitFor } from "@testing-library/react";
import {
    LoginDocument,
    LoginMutation,
    LoginMutationVariables,
} from "generated/graphql-types";
import LoginForm from "./login-form";

describe("login form", () => {
    it("displays a username or email input", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <LoginForm />
            </MockedProvider>
        );
        const usernameInput = getByLabelText(/Username or Email/i);

        expect(usernameInput).toBeInTheDocument;
    });

    it("displays a password input", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <LoginForm />
            </MockedProvider>
        );
        const passwordInput = getByLabelText(/Password/i);

        expect(passwordInput).toBeInTheDocument;
    });

    it("redirects to home after successful submission", async () => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");
        const routerPush = jest.fn();

        useRouter.mockImplementation(() => ({
            push: routerPush,
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

        await waitFor(() => {
            expect(routerPush).toHaveBeenCalledWith("/home");
        });
    });
});
