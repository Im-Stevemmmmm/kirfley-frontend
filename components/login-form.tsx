import classNames from "classnames";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { object, string } from "yup";
import { useLoginMutation } from "../generated/graphql-types";
import styles from "../styles/auth-form.module.scss";
import buttonStyles from "../styles/buttons.module.scss";
import { AuthFormProps } from "./forms/auth-form";
import AuthFormLabel from "./forms/auth-form-label";

export default function LoginForm({
    formSwapHandler: swapForm,
}: AuthFormProps) {
    const [login] = useLoginMutation();
    const router = useRouter();

    const getButtonStyles = () =>
        classNames(styles.form_button, buttonStyles.inverted);

    const LoginSchema = object().shape({
        usernameOrEmail: string().required("Required"),
        password: string()
            .required("Required")
            .test("password-is-correct", "Incorrect password", async _ => {
                const { data } = await login({
                    variables: {
                        usernameOrEmail: values.usernameOrEmail,
                        password: values.password,
                    },
                });

                return data.login.successful;
            }),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            usernameOrEmail: "",
            password: "",
        },
        onSubmit: async _ => {
            router.push("/home");
        },
        validationSchema: LoginSchema,
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <div id={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <AuthFormLabel name={"usernameOrEmail"} errors={errors}>
                    Username or Email
                </AuthFormLabel>
                <input
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    type="text"
                    onChange={handleChange}
                    value={values.usernameOrEmail}
                />

                <AuthFormLabel name={"password"} errors={errors}>
                    Password
                </AuthFormLabel>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                />

                <div className={styles.buttonContainer}>
                    <button type="submit" className={getButtonStyles()}>
                        Log In
                    </button>

                    <p>or</p>

                    <button
                        type="button"
                        className={getButtonStyles()}
                        onClick={swapForm}
                    >
                        Create an Account
                    </button>
                </div>
            </form>
        </div>
    );
}
