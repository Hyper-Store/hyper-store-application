import { useState } from "react"
import { Input, InputProps } from "../Input/index"
import { InputPasswordButton } from "./Button/index"
import { InputPasswordStyled } from "./styles"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { InputPasswordInput } from "./Input/index"

type Props = InputProps

export const InputPassword = (props: Props) => {
    const [show, setShow] = useState<boolean>(true);

    return (
        <InputPasswordStyled>
            <InputPasswordInput {...props} type={show ? "password" : "text"} />
            <InputPasswordButton onClick={() => { setShow(!show) }}>
                {show && (<BsEyeFill />)}
                {!show && (<BsEyeSlashFill />)}
            </InputPasswordButton>
        </InputPasswordStyled>
    )
}