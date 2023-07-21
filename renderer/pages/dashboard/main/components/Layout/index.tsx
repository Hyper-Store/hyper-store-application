import { useContext } from "react";
import { NotHaveSubscription } from "../NotHaveSubscription";
import { HaveSubscription } from "../HaveSubscription";
import { Loading } from "../../../@shared/components/Loading";
import { SignaturesProviderContext } from "../../../@shared/context/Signatures.contex";

export const Layout = () => {

    const { signatures, loading } = useContext(SignaturesProviderContext);

    return (
        <>
            {!loading && signatures.length < 1 && (<NotHaveSubscription />)}
            {!loading && signatures.length > 0 && (<HaveSubscription signatures={signatures} />)}
            {loading && (<Loading title="Carregando assinaturas..." />)}
        </>
    )
}