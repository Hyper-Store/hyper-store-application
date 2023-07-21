import { axios } from "../../../../../../utils/api";

export type GenereteAccountServiceProps = {
    signatureId: string
}

export const GenereteAccountService = async (props: GenereteAccountServiceProps) => {
    return axios.post('/stock-redemption', {
        ...props
    });
}