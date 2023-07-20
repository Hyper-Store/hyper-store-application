import { Header } from "../../../@shared/components/Header"
import { HaveSubscriptionStyled, RowStyled, SectionStyled } from "./styles"
import { SignatureCard, SignatureCardProps } from "./SignatureCard"
import { RedeemKey } from "../RedeemKey"
import { SignatureType } from "../../types/Signature.type"
import { IconsSignatures } from "../../../@shared/utils/iconsSignatures"

type Props = {
    signatures: SignatureType[]
}

export const HaveSubscription = ({ signatures }: Props) => {

    const signaturesCard: SignatureCardProps[] = signatures.map(s => {
        return {
            icon: IconsSignatures(signatures, s.service.name),
            title: s.service.name,
            expireIn: new Date(s.expirationDate)
        }
    })

    return (
        <>
            <HaveSubscriptionStyled>
                <SectionStyled>
                    <Header title="Assinaturas (ativas)" />
                    <RowStyled>
                        {signaturesCard.map((s, i) => (
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