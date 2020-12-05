import classNames from "classnames";
import { InputProps } from "components/auth-forms/input-props";
import { capatilizeString } from "utils/capatilize-sring/capatilize-string";
import styles from "../../auth-form.module.scss";

export const DobInput = ({
    field,
    handleChange,
    value,
}: {
    field: "month" | "day" | "year";
} & InputProps) => {
    const typeMap = {
        month: "text",
        day: "number",
        year: "number",
    };

    return (
        <input
            id={field}
            className={classNames(
                styles.form__input,
                styles[`dobContainer__${field}`]
            )}
            name={field}
            type={typeMap[field]}
            placeholder={capatilizeString(field)}
            onChange={handleChange}
            value={value}
        />
    );
};

type DobInputProps = React.ComponentProps<typeof DobInput>;
const dobInputFromProps = (props: DobInputProps) => <DobInput {...props} />;

export const MonthInput = ({ ...props }: DobInputProps) => {
    return dobInputFromProps(props);
};

const YearInput = ({ ...props }: DobInputProps) => {
    return dobInputFromProps(props);
};
