import { useState } from "react"
import { Modal } from "../Modal"
import { Description, Title, SpinnerStyled, Icon } from "./styles"
import { BiErrorCircle } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';

type Props = {
    service: "rockstar" | "valorant"
}

export const GenerateAccount = (props: Props) => {
    const [status, setStatus] = useState<"idle" | "generating" | "error" | "generated">("generated");


    return (
        <Modal show={status !== "idle"} centered={true}>
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
                <Description>Sua conta <b>{props.service}</b> foi gerada com sucesso, logo abaixo estão as informações de sua conta! Agora você possui apenas <b>25 contas</b> disponíveis para gerar hoje!</Description>
            </>)}
        </Modal>
    )
}