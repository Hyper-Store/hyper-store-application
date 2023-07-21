import { SignatureCardProps } from "../../main/components/HaveSubscription/SignatureCard"
import { SignatureType } from "../../main/types/Signature.type"
import { SiFivem, SiValorant } from "react-icons/si"
import { BiBox } from "react-icons/bi"

export const iconsSignatures = (signatures: SignatureType[], serviceName: string): SignatureCardProps["icon"] => {

    const serviceFind = signatures.find(s => s.service.name === serviceName)

    if (serviceFind.service.name === "Rockstar") return {
        value: (<SiFivem />),
        color: '#f76d00'
    }

    if (serviceFind.service.name === "Valorant") return {
        value: (<SiValorant />),
        color: '#f74452'
    }

    return {
        value: (<BiBox />)
    }
}