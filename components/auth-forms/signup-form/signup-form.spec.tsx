import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { fireEvent, render, waitFor } from "@testing-library/react";
import {
    CheckFieldAvailabiltyDocument,
    CheckFieldAvailabiltyQuery,
    CheckFieldAvailabiltyQueryVariables,
    InputField,
    RegisterUserDocument,
    RegisterUserMutation,
    RegisterUserMutationVariables,
} from "generated/graphql-types";
import SignupForm from "./signup-form";

describe("signup form", () => {
    it("renders correctly", () => {
        const { container } = render(
            <MockedProvider>
                <SignupForm />
            </MockedProvider>
        );

        expect(container).toMatchSnapshot();
    });

    it("has a username input", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <SignupForm />
            </MockedProvider>
        );
        const usernameInput = getByLabelText(/Username/i);

        expect(usernameInput).toBeInTheDocument;
    });

    it("has an email input", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <SignupForm />
            </MockedProvider>
        );
        const emailInput = getByLabelText(/Email/i);

        expect(emailInput).toBeInTheDocument;
    });

    it("has a password input", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <SignupForm />
            </MockedProvider>
        );
        const passwordInput = getByLabelText(/^Password/i);

        expect(passwordInput).toBeInTheDocument;
    });

    it("has a confirm password input", () => {
        const { getByLabelText } = render(
            <MockedProvider>
                <SignupForm />
            </MockedProvider>
        );
        const confirmPasswordInput = getByLabelText(/Confirm Password/i);

        expect(confirmPasswordInput).toBeInTheDocument;
    });

    it("signs the user up on submit and redirects to /home", async () => {
        const username = "Steve";
        const email = "example@email.com";
        const password = "123456";

        const useRouter = jest.spyOn(require("next/router"), "useRouter");
        const routerPush = jest.fn();

        useRouter.mockImplementation(() => ({
            push: routerPush,
        }));

        const apiMocks: MockedResponse<Record<string, any>>[] = [
            {
                request: {
                    query: RegisterUserDocument,
                    variables: {
                        year: 0,
                        day: 0,
                        month: 0,
                        username,
                        email,
                        password,
                    } as RegisterUserMutationVariables,
                },
                result: {
                    data: {
                        registerUser: {
                            successful: true,
                        },
                    } as RegisterUserMutation,
                },
            },
            {
                request: {
                    query: CheckFieldAvailabiltyDocument,
                    variables: {
                        field: InputField.Username,
                        value: username,
                    } as CheckFieldAvailabiltyQueryVariables,
                },
                result: {
                    data: {
                        checkFieldAvailability: true,
                    } as CheckFieldAvailabiltyQuery,
                },
            },
            {
                request: {
                    query: CheckFieldAvailabiltyDocument,
                    variables: {
                        field: InputField.Email,
                        value: email,
                    } as CheckFieldAvailabiltyQueryVariables,
                },
                result: {
                    data: {
                        checkFieldAvailability: true,
                    } as CheckFieldAvailabiltyQuery,
                },
            },
        ];

        const { getByText, getByLabelText } = render(
            <MockedProvider mocks={apiMocks}>
                <SignupForm />
            </MockedProvider>
        );

        const usernameInput = getByLabelText(/Username/i);
        const emailInput = getByLabelText(/Email/i);
        const passwordInput = getByLabelText(/^Password/i);
        const confirmPasswordInput = getByLabelText(/Confirm Password/i);

        const submitButton = getByText(/Sign up/i, { selector: "button" });

        fireEvent.change(usernameInput, {
            target: { value: username },
        });

        fireEvent.change(emailInput, {
            target: { value: email },
        });

        fireEvent.change(passwordInput, {
            target: { value: password },
        });

        fireEvent.change(confirmPasswordInput, {
            target: { value: password },
        });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(routerPush).toHaveBeenCalledWith("/home");
        });
    });

    it.todo("confirmation email is sent after signup");
});
