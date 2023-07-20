import { axios } from "../../../../../../utils/api";

export type LoginServiceProps = {
    key: string
}

export const RedeemKeyService = async (props: LoginServiceProps) => {
    return axios.post(`/keys/redeem/${props.key}`);
}