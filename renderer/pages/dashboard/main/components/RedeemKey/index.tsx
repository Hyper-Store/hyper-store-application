import { BiSend } from "react-icons/bi"
import { Form } from "../../../../../components/Form";
import { useForm } from "react-hook-form";

export const RedeemKey = () => {

    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();

    const onSubmit = handleSubmit(async (data) => {

    })

    return (
        <Form.Root onSubmit={onSubmit}>
            <Form.Control>
                <Form.InputButtonGroup>
                    <Form.Input type="text" name="key" control={control} placeholder="Insira sua key" />
                    <Form.Button><BiSend /></Form.Button>
                </Form.InputButtonGroup>
            </Form.Control>
        </Form.Root>
    )
}