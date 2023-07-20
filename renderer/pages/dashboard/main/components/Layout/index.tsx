import { useContext, useEffect, useState } from "react";
import { SignatureType } from "../../types/Signature.type";
import { NotHaveSubscription } from "../NotHaveSubscription";
import { HaveSubscription } from "../HaveSubscription";
import { Loading } from "../../../@shared/components/Loading";
import { SocketWSProviderContext } from "../../../@shared/context/SocketWS.context";
import { WSBinaryConverter } from "../../../../../utils/ws-binary-converter";

export const Layout = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [signatures, setSignatures] = useState<SignatureType[]>([]);
    const { socket } = useContext(SocketWSProviderContext);

    useEffect(() => {
        if (!socket) return () => { };
        socket.on('activated-signatures', ListenerSignaturesChanges);
        socket.emit('retrieve-activated-signatures')

        return () => {
            socket.off('activated-signatures');
        };
    }, [socket]);

    const ListenerSignaturesChanges = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        setSignatures(data);
        setLoading(false);
    }

    return (
        <>
            {!loading && signatures.length < 1 && (<NotHaveSubscription />)}
            {!loading && signatures.length > 0 && (<HaveSubscription signatures={signatures} />)}
            {loading && (<Loading title="Carregando assinaturas..." />)}
        </>
    )
}