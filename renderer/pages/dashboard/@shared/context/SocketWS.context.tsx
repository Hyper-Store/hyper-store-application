import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import socket, { Socket, io } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { parseCookies } from 'nookies'
import chalk from 'chalk';

interface EventProviderContextProps {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

export const SocketWSProviderContext = createContext<EventProviderContextProps>({} as EventProviderContextProps);

export const SocketWSProvider = ({ children }: { children: React.ReactNode }) => {
    const [socketConnection, setSocketConnection] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>()

    const { push } = useRouter();

    useEffect(() => {
        const socket = io('ws://api.leinadhosting.app/websocket', {
            query: {
                accessToken: localStorage.getItem('accessToken')
            }
        })

        socket.on('connect', () => {
            setSocketConnection(socket)
            console.log(chalk.green('[WEBSOCKET]'), 'Successfully connected to the server.')
        });

        socket.on('disconnect', () => {
            push('/auth/login');
            console.log(chalk.red('[WEBSOCKET]'), 'Disconnected from the server.')
            toast.error('Sua sessão foi desconectada, faça login novamente...')
        })

        return;
    }, [])

    return (
        <SocketWSProviderContext.Provider value={{ socket: socketConnection }}>{children}</SocketWSProviderContext.Provider>
    )
}