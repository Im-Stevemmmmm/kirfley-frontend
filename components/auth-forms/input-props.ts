import { ChangeEvent } from "react";

export interface InputProps {
    handleChange: (e: ChangeEvent<any>) => void;
    value: string | number;
}
