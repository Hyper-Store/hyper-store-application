import { InputHTMLAttributes } from "react"
import { InputStyled } from "./styles"
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & UseControllerProps<FieldValues, string>;

export const Input = (props: InputProps) => {
    const { field } = useController(props);

    return <InputStyled {...props} {...field} />;
};