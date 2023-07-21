import { useContext, useEffect, useState } from "react"
import { Modal } from "../Modal"
import { Description, Title, SpinnerStyled, Icon } from "./styles"
import { BiCopy, BiErrorCircle } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { Form } from "../../../../../components/Form";
import { CopyContent } from "../../utils/copyContent";
import { GenereteAccountService } from "./services/generate-account.service";

type Props = {
    service: string,
    signatureId: string
}

export const GenerateAccount = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");
    const [status, setStatus] = useState<"idle" | "generating" | "error" | "generated">("idle");

    const { events } = useContext(EventProviderContext)

    useEffect(() => {
        events.on('generateAccount', handleGenerateAccount);

        return () => {
            events.off('generateAccount', handleGenerateAccount);
        };
    }, []);

    const handleGenerateAccount = async () => {
        setStatus("generating");
        setShow(true);

        const request = await GenereteAccountService({ signatureId: props.signatureId })
        console.log(request)
    }

    const handleCopy = () => {
        CopyContent({
            content: account,
            message: 'A conta foi copiada com sucesso para sua área de transferência!'
        })
    }

    return (
        <Modal show={show} centered={true} onHide={() => { status !== "generating" && setShow(false) }}>
            {status === "generating" && (<>
                <SpinnerStyled />
                <Title>Generando a sua conta {props.service}...</Title>
                <Description>Este processo pode demorar um pouco, pois estamos processando as informações no servidor, então aguarde por favor...</Description>
            </>)}

            {status === "error" && (<>
                <Icon type="error"><BiErrorCircle /></Icon>
                <Title>Houve um erro ao tentar gerar sua conta</Title>
                <Description>Durante o processo houve um erro interno ao tentar gerar sua conta, mais fique tranquilo que não foi removida do seu serviço, você pode tentar gerar outra novamente!</Description>
            </>)}

            {status === "generated" && (<>
                <Icon type="success"><BsCheckCircle /></Icon>
                <Title>Conta gerada com sucesso</Title>
                <Description>Sua conta <b>{props.service}</b> foi gerada com sucesso, logo abaixo estão as informações de sua conta!</Description>
                <Form.InputButtonGroup>
                    <Form.Input type="text" value={account} />
                    <Form.Button onClick={handleCopy}><BiCopy /></Form.Button>
                </Form.InputButtonGroup>
            </>)}
        </Modal>
    )
}