import { axios } from "../../../../utils/api"


export type LoginServiceProps = {
    value: string,
    password: string
}

export const LoginService = async (props: LoginServiceProps) => {
    return axios.post('/auth/login', {
        ...props
    });
}