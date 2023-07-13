import { BiErrorCircle } from "react-icons/bi"
import { DescriptionStyled, IconStyled, NotHaveSubscriptionStyled, TitleStyled } from "./styles"
import { RedeemKey } from "../RedeemKey"
import { Form } from "../../../@shared/components/Form"

export const NotHaveSubscription = () => {
    return (
        <NotHaveSubscriptionStyled>
            <IconStyled><BiErrorCircle /></IconStyled>
            <TitleStyled>👋 Olá Daniel, Seja Bem-Vindo(a)!</TitleStyled>
            <DescriptionStyled>Eu indentifiquei que você não possui nenhuma assinatura em nosso serviço, mais sem problemas! Você pode assinar agora utilizando uma key que você tenha em mãos ou você pode adquirir uma em nosso discord!</DescriptionStyled>
            <RedeemKey />
            <Form.Button>🛒 Comprar agora</Form.Button>
        </NotHaveSubscriptionStyled>
    )
}