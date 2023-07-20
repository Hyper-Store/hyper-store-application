import { createContext, useEffect, useState } from 'react';
import socket, { Socket, io } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

interface EventProviderContextProps {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
}

export const SocketWSProviderContext = createContext<EventProviderContextProps>({} as EventProviderContextProps);

export const SocketWSProvider = ({ children }: { children: React.ReactNode }) => {
    const [socketConnection, setSocketConnection] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>()

    useEffect(() => {
        const socket = io('ws://localhost:1000', {
            query: {
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwOTE5NDI4NC1mOTk0LTQ5MDMtOTliZC1kMTY4M2E3YmFmNzciLCJjcmVhdGVkQXQiOiIyMDIzLTA3LTIwVDE1OjA4OjMzLjIwOFoiLCJpYXQiOjE2ODk4NjU3MTMsImV4cCI6MTY5MDA4MTcxM30._ZlFr3UhS5zVtqbKqiz-_ICAOz_KRFUQawACBs4sBrE'
            }
        })

        socket.on('connect', () => {
            setSocketConnection(socket)
            console.log('Successfully connected to the server.');
        });

        return;
    }, [])

    return (
        <SocketWSProviderContext.Provider value={{ socket: socketConnection }}>{children}</SocketWSProviderContext.Provider>
    )
}