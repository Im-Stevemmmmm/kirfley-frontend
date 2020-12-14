import { useApolloClient } from "@apollo/client";
import { useFormik } from "formik";
import {
    CheckFieldAvailabiltyDocument,
    CheckFieldAvailabiltyQuery,
    CheckFieldAvailabiltyQueryVariables,
    InputField,
    useRegisterUserMutation,
} from "generated/graphql-types";
import { useRouter } from "next/router";
import { object, string } from "yup";
import { StandardForm } from "../form-builder";

const SignupForm = () => {
    const client = useApolloClient();
    const [registerUser] = useRegisterUserMutation();

    const router = useRouter();

    const checkFieldAvailability = async (field: InputField, value: string) => {
        const { data } = await client.query<
            CheckFieldAvailabiltyQuery,
            CheckFieldAvailabiltyQueryVariables
        >({
            query: CheckFieldAvailabiltyDocument,
            variables: {
                field,
                value,
            },
        });

        return data.checkFieldAvailability;
    };

    const SignupSchema = object().shape({
        username: string()
            .required("Required")
            .min(4, "Must be atleast 4 characters long")
            .max(26, "Must be less than 26 characters long")
            .test(
                "username-available",
                "Username is already taken",
                async username => {
                    return await checkFieldAvailability(
                        InputField.Username,
                        username
                    );
                }
            ),
        email: string()
            .email("Invalid email")
            .required("Required")
            .test(
                "email-available",
                "Email is already registered",
                async email => {
                    return await checkFieldAvailability(
                        InputField.Email,
                        email
                    );
                }
            ),
        password: string()
            .required("Required")
            .min(4, "Must be atleast 4 characters long")
            .max(26, "Must be less than 26 characters long"),
        confirmPassword: string()
            .required("Required")
            .test(
                "password-match",
                "Passwords do not match",
                function (confirmPassword) {
                    return this.parent.password === confirmPassword;
                }
            ),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            day: 0,
            month: 0,
            year: 0,
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async values => {
            await registerUser({
                variables: {
                    year: values.year,
                    month: values.month,
                    day: values.day,
                    username: values.username,
                    email: values.email,
                    password: values.password,
                },
            });

            router.push("/home");
        },
        validationSchema: SignupSchema,
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <StandardForm handleSubmit={handleSubmit}>
            <StandardForm.Title>Sign Up</StandardForm.Title>

            <StandardForm.Label forField="username">
                Username
            </StandardForm.Label>
            <StandardForm.FieldInput
                field="username"
                placeholder="Atleast 4 characters long"
                handleChange={handleChange}
                value={values.username}
                error={errors.username}
            />

            <StandardForm.Label forField="email">Email</StandardForm.Label>
            <StandardForm.FieldInput
                field="email"
                placeholder="example@email.com"
                handleChange={handleChange}
                value={values.email}
                error={errors.email}
            />

            <StandardForm.Label forField="password">
                Password
            </StandardForm.Label>
            <StandardForm.FieldInput
                field="password"
                placeholder="Atleast 4 characters long"
                type="password"
                handleChange={handleChange}
                value={values.password}
                error={errors.password}
            />

            <StandardForm.Label forField="confirmPassword">
                Confirm Password
            </StandardForm.Label>
            <StandardForm.FieldInput
                field="confirmPassword"
                type="password"
                handleChange={handleChange}
                value={values.confirmPassword}
                error={errors.confirmPassword}
            />

            <StandardForm.Buttons>
                <StandardForm.Button type="submit">Sign Up</StandardForm.Button>

                <StandardForm.Text>or</StandardForm.Text>

                <StandardForm.Button handleClick={() => router.push("/")}>
                    Back to log in
                </StandardForm.Button>
            </StandardForm.Buttons>
        </StandardForm>
    );
};

export default SignupForm;
