import { BiSend } from "react-icons/bi"
import { Form } from "../../../../../components/Form";
import { useForm } from "react-hook-form";
import { KeyValidator } from "./validators";
import { useContext } from "react";
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { ModalDialogProps } from "../../../@shared/components/ModalDialog";
import { useRouter } from "next/router";

export const RedeemKey = () => {

    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();
    const { events } = useContext(EventProviderContext);
    const { push } = useRouter();

    const onSubmit = handleSubmit(async (data) => {

    });


    const handleClickBuy = () => {
        window.open('https://discord.com/app');
    }

    return (
        <>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.InputButtonGroup>
                        <Form.Input disabled={isSubmitting} rules={KeyValidator} type="text" name="key" control={control} placeholder="Insira sua key" />
                        <Form.Button isLoading={isSubmitting}><BiSend /></Form.Button>
                    </Form.InputButtonGroup>
                    {errors.key && (<Form.Error>{errors.key.message as string}</Form.Error>)}
                </Form.Control>
            </Form.Root>
            <Form.Button>🛒 Comprar agora</Form.Button>
        </>
    )
}