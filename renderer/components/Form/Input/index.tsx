import { InputHTMLAttributes } from "react"
import { InputStyled } from "./styles"
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Partial<UseControllerProps<FieldValues, string>>;

export const Input = (props: InputProps) => {
    let field = null

    if (props.control) {
        const { field: controllerField } = useController(props as UseControllerProps<FieldValues, string>);
        field = controllerField;
    }

    return <InputStyled {...props} {...field} />;
};