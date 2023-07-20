import { Header } from "../../../@shared/components/Header"
import { HaveSubscriptionStyled, RowStyled, SectionStyled } from "./styles"
import { SiFivem, SiValorant } from "react-icons/si"
import { SignatureCard, SignatureCardProps } from "./SignatureCard"
import { RedeemKey } from "../RedeemKey"

export const HaveSubscription = () => {

    const signatures: SignatureCardProps[] = [
        {
            icon: {
                value: <SiFivem />,
                color: '#f76d00'
            },
            title: 'Rockstar fivem',
            expireIn: new Date()
        },
        {
            icon: {
                value: <SiValorant />,
                color: '#f74452'
            },
            title: 'Valorant',
            expireIn: new Date()
        }
    ]

    return (
        <>
            <HaveSubscriptionStyled>
                <SectionStyled>
                    <Header title="Assinaturas (ativas)" />
                    <RowStyled>
                        {signatures.map((s, i) => (
                            <SignatureCard {...s} key={i} />
                        ))}
                    </RowStyled>
                </SectionStyled>
                <SectionStyled>
                    <Header title="Resgatar nova key" />
                    <RedeemKey />
                </SectionStyled>
            </HaveSubscriptionStyled>
        </>
    )
}