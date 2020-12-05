import classNames from "classnames";
import styles from "../../auth-form.module.scss";
import { InputProps } from "../../input-props";

export const Input = ({
    field,
    type,
    placeholder,
    error,
    handleChange,
    value,
}: {
    field: string;
    error: string;
    type?: string;
    placeholder?: string;
} & InputProps) => {
    return (
        <input
            id={field}
            className={classNames(styles.form_input, {
                [styles.form_input__error]: error,
            })}
            name={field}
            type={type || "text"}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    );
};
