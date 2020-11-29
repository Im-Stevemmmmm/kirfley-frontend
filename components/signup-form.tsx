import { useApolloClient } from "@apollo/client";
import classNames from "classnames";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { object, string } from "yup";
import {
    CheckFieldAvailabiltyDocument,
    CheckFieldAvailabiltyQuery,
    CheckFieldAvailabiltyQueryVariables,
    useRegisterUserMutation,
} from "../generated/graphql-types";
import styles from "../styles/auth-form.module.scss";
import buttonStyles from "../styles/buttons.module.scss";
import { AuthFormProps } from "./forms/auth-form";
import AuthFormLabel from "./forms/auth-form-label";

export default function SignupForm({
    formSwapHandler: swapForm,
}: AuthFormProps) {
    const client = useApolloClient();
    const [registerUser] = useRegisterUserMutation();

    const router = useRouter();

    const checkFieldAvailability = async (
        field: "username" | "email",
        value: string
    ): Promise<boolean> => {
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

        return data.checkFieldAvailability.successful;
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
                    return await checkFieldAvailability("username", username);
                }
            ),
        email: string()
            .email("Invalid email")
            .required("Required")
            .test(
                "email-available",
                "Email is already registered",
                async email => {
                    return await checkFieldAvailability("email", email);
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
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async values => {
            await registerUser({
                variables: {
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
        <div id={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <AuthFormLabel name={"username"} errors={errors}>
                    Username or Email
                </AuthFormLabel>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="atleast 4 characters long"
                    onChange={handleChange}
                    value={values.username}
                />

                <AuthFormLabel name={"email"} errors={errors}>
                    Email
                </AuthFormLabel>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@domain.com"
                    onChange={handleChange}
                    value={values.email}
                />

                <AuthFormLabel name={"password"} errors={errors}>
                    Password
                </AuthFormLabel>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="atleast 4 characters long"
                    onChange={handleChange}
                    value={values.password}
                />

                <AuthFormLabel name={"confirmPassword"} errors={errors}>
                    Confirm Password
                </AuthFormLabel>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={values.confirmPassword}
                />

                <div className={styles.buttonContainer}>
                    <button
                        type="submit"
                        className={classNames(
                            styles.form_button,
                            buttonStyles.inverted
                        )}
                        onClick={swapForm}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
