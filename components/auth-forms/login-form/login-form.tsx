import { useFormik } from "formik";
import { useLoginMutation } from "generated/graphql-types";
import { useRouter } from "next/router";
import { object, string } from "yup";
import { StandardForm } from "../form-builder";

const LoginForm = () => {
    const [login] = useLoginMutation();
    const router = useRouter();

    const LoginSchema = object().shape({
        usernameOrEmail: string().required("Required"),
        password: string().required("Required"),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            usernameOrEmail: "",
            password: "",
        },
        onSubmit: async values => {
            const { data } = await login({
                variables: {
                    usernameOrEmail: values.usernameOrEmail,
                    password: values.password,
                },
            });

            if (!data.login.successful) {
                const error = data.login.error;

                errors[error.field] = error.message;

                return;
            }

            router.push("/home");
        },
        validationSchema: LoginSchema,
        validateOnChange: false,
        validateOnBlur: false,
    });

    return (
        <StandardForm handleSubmit={handleSubmit}>
            <StandardForm.Title>Log in</StandardForm.Title>

            <StandardForm.Label forField="usernameOrEmail">
                Username or email
            </StandardForm.Label>
            <StandardForm.FieldInput
                field="usernameOrEmail"
                placeholder="Username or email"
                handleChange={handleChange}
                value={values.usernameOrEmail}
                error={errors.usernameOrEmail}
            />

            <StandardForm.Label forField="password">
                Password
            </StandardForm.Label>
            <StandardForm.FieldInput
                field="password"
                placeholder="Password"
                type="password"
                handleChange={handleChange}
                value={values.password}
                error={errors.password}
            />

            <StandardForm.Buttons>
                <StandardForm.Button type="submit">Log In</StandardForm.Button>

                <StandardForm.Text>or</StandardForm.Text>

                <StandardForm.Button handleClick={() => router.push("/signup")}>
                    Create an account
                </StandardForm.Button>
            </StandardForm.Buttons>
        </StandardForm>
    );
};

export default LoginForm;
