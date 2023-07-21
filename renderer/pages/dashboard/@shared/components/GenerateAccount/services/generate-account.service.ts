import { axios } from "../../../../../../utils/api";

export type GenereteAccountServiceProps = {
    accessToken: string,
    signatureId: string
}

export const GenereteAccountService = async (props: GenereteAccountServiceProps) => {
    return axios.post('/stock-redemption', {
        signatureId: props.signatureId
    }, {
        headers: {
            "Authorization": props.accessToken
        }
    });
}