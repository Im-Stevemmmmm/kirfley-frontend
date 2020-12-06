import classNames from "classnames";
import { ChangeEvent, FormEvent } from "react";
import buttonStyles from "styles/misc/buttons.module.scss";
import { capatilizeString } from "utils/capatilize-sring/capatilize-string";
import { ComponentChildren } from "utils/component-children/component-children";
import styles from "./auth-form.module.scss";

interface InputProps {
    handleChange: (e: ChangeEvent<any>) => void;
}

interface StandardFormProps extends ComponentChildren {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

interface LabelProps extends ComponentChildren {
    forField: string;
}

interface FieldInputProps extends InputProps {
    value: string | number;
    field: string;
    error?: string;
    type?: string;
    placeholder?: string;
}

interface DateInputProps extends InputProps {
    values: {
        month: number;
        day: number;
        year: number;
    };
}

interface ButtonProps extends ComponentChildren {
    type?: "button" | "submit" | "reset";
    handleClick?: () => void;
}

export const StandardForm = ({ handleSubmit, children }: StandardFormProps) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

StandardForm.Title = ({ children }: ComponentChildren) => {
    return <h1 className={styles.form__title}>{children}</h1>;
};

StandardForm.Label = ({ forField, children }: LabelProps) => {
    return (
        <label className={classNames(styles.form__label)} htmlFor={forField}>
            {children}
        </label>
    );
};

StandardForm.FieldInput = ({
    field,
    type,
    placeholder,
    error,
    handleChange,
    value,
}: FieldInputProps) => {
    return (
        <input
            id={field}
            className={classNames(styles.form__input, {
                [styles.form__input___error]: error,
            })}
            name={field}
            type={type || "text"}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    );
};

StandardForm.DateInput = ({ values, handleChange }: DateInputProps) => {
    const DobInput = ({
        field,
        handleChange,
        value,
    }: {
        field: "month" | "day" | "year";
    } & FieldInputProps) => {
        return (
            <input
                id={field}
                className={classNames(
                    styles.form__input,
                    styles[`dobContainer__${field}`]
                )}
                name={field}
                type="number"
                placeholder={capatilizeString(field)}
                onChange={handleChange}
                value={value}
            />
        );
    };

    return (
        <div className={styles.dobContainer}>
            <DobInput
                field="month"
                handleChange={handleChange}
                value={values.month}
            />
            <DobInput
                field="day"
                handleChange={handleChange}
                value={values.day}
            />
            <DobInput
                field="year"
                handleChange={handleChange}
                value={values.year}
            />
        </div>
    );
};

StandardForm.Buttons = ({ children }: ComponentChildren) => {
    return <div className={styles.buttonContainer}>{children}</div>;
};

StandardForm.Button = ({ type, handleClick, children }: ButtonProps) => {
    return (
        <button
            type={type || "button"}
            className={classNames(styles.form__button, buttonStyles.standard)}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

StandardForm.Text = ({ children }: ComponentChildren) => {
    return <p className={styles.buttonContainer__text}>{children}</p>;
};
