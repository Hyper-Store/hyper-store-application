import { useContext, useEffect, useState } from "react"
import { Modal } from "../Modal"
import { Description, Title, SpinnerStyled, Icon } from "./styles"
import { BiCopy, BiErrorCircle } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { EventProviderContext } from "../../../../../context/EventProvider.context";
import { Form } from "../../../../../components/Form";
import { CopyContent } from "../../utils/copyContent";
import { GenereteAccountService } from "./services/generate-account.service";
import { GetCurrentUserProviderContext } from "../../context/GetCurrentUser";

type Props = {
    service: string,
    signatureId: string
}

export const GenerateAccount = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");
    const { accessToken } = useContext(GetCurrentUserProviderContext);
    const [status, setStatus] = useState<"idle" | "generating" | "error" | "outOfStockError" | "maxStockRedemptionReachedError" | "network" | "generated">("idle");

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

        try {
            const request = await GenereteAccountService({ accessToken, signatureId: props.signatureId })

            if (request.status === 201) {
                setStatus('generated');
                setAccount(request.data.value as string);
                return;
            }

            if (request.data.error.name === "OutOfStockError") {
                setStatus('outOfStockError');
                return;
            }

            if (request.data.error.name === "MaxStockRedemptionReachedError") {
                setStatus('maxStockRedemptionReachedError');
                return;
            }

            setStatus('error');
        } catch (error) {
            setStatus('network');
        }
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

            {status === "generated" && (<>
                <Icon type="success"><BsCheckCircle /></Icon>
                <Title>Conta gerada com sucesso</Title>
                <Description>Sua conta <b>{props.service}</b> foi gerada com sucesso, logo abaixo estão as informações de sua conta!</Description>
                <Form.InputButtonGroup>
                    <Form.Input type="text" value={account} />
                    <Form.Button onClick={handleCopy}><BiCopy /></Form.Button>
                </Form.InputButtonGroup>
            </>)}


            {status === "maxStockRedemptionReachedError" && (<>
                <Icon type="error"><BiErrorCircle /></Icon>
                <Title>Limite de estoque excedido</Title>
                <Description>O seu limite de estoque diário foi excedido, você pode gerar outra conta novamente apartir de <b>21:00 horas da noite de {new Date().getHours() > 21 ? "amanhã" : "hoje"}!</b></Description>
            </>)}

            {status === "outOfStockError" && (<>
                <Icon type="error"><BiErrorCircle /></Icon>
                <Title>Estoque indisponível</Title>
                <Description>Estamos sem estoque no momento, a nossa equipe já está trabalhando para resolver o problema, recomendamos que entre em nosso discord, pois assim que atualizar o estoque você será notificado!</Description>
            </>)}

            {status === "error" && (<>
                <Icon type="error"><BiErrorCircle /></Icon>
                <Title>Houve um erro ao tentar gerar sua conta</Title>
                <Description>Durante o processo houve um erro interno ao tentar gerar sua conta, mais fique tranquilo que não foi removida do seu serviço, você pode tentar gerar outra novamente!</Description>
            </>)}

            {status === "network" && (<>
                <Icon type="error"><BiErrorCircle /></Icon>
                <Title>Houve um erro de conexão</Title>
                <Description>Ao tentar gerar sua conta houve uma perca de conexão com o servidor, aguarde e tente novamente mais tarde!</Description>
            </>)}
        </Modal>
    )
}