import classNames from "classnames";
import styles from "../../styles/auth-form.module.scss";

export default function AuthFormLabel({
    name,
    errors,
    children,
}: {
    name: string;
    errors: any;
    children: React.ReactNode;
}) {
    return (
        <label
            className={classNames(styles.form_label, {
                [styles.form_label__error]: errors[name],
            })}
            htmlFor={name}
        >
            {children}
        </label>
    );
}
