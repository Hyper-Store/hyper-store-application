import { axios } from "../../../../utils/api"


export type LoginServiceProps = {
    emailOrUsername: string,
    password: string
}

export const LoginService = async (props: LoginServiceProps) => {
    return axios.post('/auth/login', {
        value: props.emailOrUsername,
        password: props.password
    });
}