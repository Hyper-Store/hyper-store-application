import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { SignaturesProviderContext } from "../../context/Signatures.contex";
import toast from "react-hot-toast";

type Props = {
    service: string
}

export const ValidateService = ({ service }: Props) => {
    const { push } = useRouter();
    const { signatures, loading } = useContext(SignaturesProviderContext)

    useEffect(() => {
        if (!loading && signatures && !signatures.find(s => s.service.name === service)) {
            push('/dashboard/main');
            toast.error(<>Você não possui acesso ao serviço: <b>{service}</b></>)
        }
    }, [signatures, loading])

    return (<></>)
}