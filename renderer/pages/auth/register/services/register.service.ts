import { axios } from "../../../../utils/api"


export type LoginServiceProps = {
    username: string,
    email: string,
    password: string
}

export const RegisterService = async (props: LoginServiceProps) => {
    return axios.post('/auth/signup', {
        ...props
    });
}