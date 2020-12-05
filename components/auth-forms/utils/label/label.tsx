import classNames from "classnames";
import styles from "../../auth-form.module.scss";

export const Label = ({
    name,
    children,
}: {
    name: string;
    children: React.ReactNode;
}) => {
    return (
        <label className={classNames(styles.form_label)} htmlFor={name}>
            {children}
        </label>
    );
};
