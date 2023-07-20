import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import socket, { Socket, io } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

interface EventProviderContextProps {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

export const SocketWSProviderContext = createContext<EventProviderContextProps>({} as EventProviderContextProps);

export const SocketWSProvider = ({ children }: { children: React.ReactNode }) => {
    const [socketConnection, setSocketConnection] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>()

    const { push } = useRouter();

    useEffect(() => {
        const socket = io('ws://localhost:1000', {
            query: {
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwOTE5NDI4NC1mOTk0LTQ5MDMtOTliZC1kMTY4M2E3YmFmNzciLCJjcmVhdGVkQXQiOiIyMDIzLTA3LTIwVDIyOjU3OjMxLjA5NFoiLCJpYXQiOjE2ODk4OTM4NTEsImV4cCI6MTY5MDEwOTg1MX0.PWARBefoMTTf7o7hQRYgGkM91fVz2dyO2CdhmIwKoYw'
            }
        })

        socket.on('connect', () => {
            setSocketConnection(socket)
            console.log('Successfully connected to the server.');
        });

        socket.on('disconnect', () => {
            push('/auth/login');
            toast.error('Sua sessão foi desconectada, faça login novamente...')
        })

        return;
    }, [])

    return (
        <SocketWSProviderContext.Provider value={{ socket: socketConnection }}>{children}</SocketWSProviderContext.Provider>
    )
}