import { ReactNode } from "react"
import { About, Details, Description, Icon, SignatureCardStyled, Title } from "./styles"
import { Col } from "react-bootstrap"

export type SignatureCardProps = {
    icon: {
        value: ReactNode,
        color?: string
    },
    title: string,
    expireIn: Date
}

export const SignatureCard = (props: SignatureCardProps) => {

    const expireDate = new Date(props.expireIn);
    const currentDate = new Date();
    const differenceInMilliseconds = expireDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return (
        <Col md={12}>
            <SignatureCardStyled>
                <Icon iconColor={props.icon.color}>{props.icon.value}</Icon>
                <Details>
                    <Title>{props.title}</Title>
                    <About>
                        <Description>Expira em: <code>{expireDate.toLocaleString()}</code>({daysRemaining})</Description>
                        <Description>Status: <code>Ativo</code></Description>
                    </About>
                </Details>
            </SignatureCardStyled>
        </Col>
    )
}