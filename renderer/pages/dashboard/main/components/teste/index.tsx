import { useContext, useEffect } from "react";
import { SocketWSProviderContext } from "../../../@shared/context/SocketWS.context";

export const Teste = () => {
    const { socket } = useContext(SocketWSProviderContext);

    useEffect(() => {
        if (!socket) return () => { };
        socket.on('activated-signatures', (message) => { console.log('mensagem>', message) });
        socket.emit('retrieve-activated-signatures')
        console.log('emitido')

        return () => {
            socket.off('activated-signatures');
        };
    }, [socket]);

    return (<></>)
}