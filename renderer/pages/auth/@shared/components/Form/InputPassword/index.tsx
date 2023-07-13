import { useState } from "react"
import { Input, InputProps } from "../Input/index"
import { InputPasswordButton } from "./Button/index"
import { InputPasswordStyled } from "./styles"
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs"
import { InputPasswordInput } from "./Input/index"

type Props = InputProps

export const InputPassword = (props: Props) => {

    const [focus, setFocus] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true);

    const handleClick = () => {
        setShow(!show)
    }

    const handleEnableFocus = () => {
        setFocus(true)
    }

    const handleDisabledFocus = () => {
        setFocus(false)
    }

    return (
        <InputPasswordStyled focus={focus}>
            <InputPasswordInput {...props} type={show ? "password" : "text"} onFocus={handleEnableFocus} onBlur={handleDisabledFocus} onBlurCapture={handleDisabledFocus} />
            <InputPasswordButton onMouseDown={handleClick}>
                {show && (<BsEyeFill />)}
                {!show && (<BsEyeSlashFill />)}
            </InputPasswordButton>
        </InputPasswordStyled>
    )
}