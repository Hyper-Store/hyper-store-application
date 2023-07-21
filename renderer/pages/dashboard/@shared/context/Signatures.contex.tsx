import { createContext, useContext, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { SocketWSProviderContext } from './SocketWS.context';
import { WSBinaryConverter } from '../../../../utils/ws-binary-converter';
import { SignatureType } from '../../main/types/Signature.type';

interface SignaturesProviderContextProps {
    signatures: SignatureType[],
    loading: boolean
}

export const SignaturesProviderContext = createContext<SignaturesProviderContextProps>({} as SignaturesProviderContextProps);

export const SignaturesProvider = ({ children }: { children: React.ReactNode }) => {
    const [signatures, setSignatures] = useState<SignatureType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const { socket } = useContext(SocketWSProviderContext)

    useEffect(() => {
        if (!socket) return () => { };
        socket.on('activated-signatures', ListenerSignaturesChanges);
        socket.emit('retrieve-activated-signatures')

        return () => {
            socket.off('activated-signatures');
        };
        return;
    }, [socket])

    const ListenerSignaturesChanges = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        setSignatures(data);
        setLoading(false);
    }

    return (
        <SignaturesProviderContext.Provider value={{ signatures, loading }}>{children}</SignaturesProviderContext.Provider>
    )
}