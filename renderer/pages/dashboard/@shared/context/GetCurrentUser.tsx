import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { SocketWSProviderContext } from './SocketWS.context';
import { WSBinaryCompile, WSBinaryConverter } from '../../../../utils/ws-binary-converter';
import { AccountHistoryType } from '../types/AccountHistory.type';

interface GetCurrentUserProviderContextProps {
    id: string,
    username: string,
    email: string,
    accessToken: string,
    refreshToken: string,
    loading: boolean
}

interface CurrenUserProps extends Omit<GetCurrentUserProviderContextProps, "loading"> { }

export const GetCurrentUserProviderContext = createContext<GetCurrentUserProviderContextProps>({} as GetCurrentUserProviderContextProps);

type GetCurrentUserProviderProps = {
    children: ReactNode
}

export const GetCurrentUserProvider = ({ children }: GetCurrentUserProviderProps) => {
    const [currentUser, setCurrentUser] = useState<CurrenUserProps>({
        id: '',
        username: '',
        email: '',
        accessToken: '',
        refreshToken: ''
    })

    const [loading, setLoading] = useState<boolean>(true);

    const { socket } = useContext(SocketWSProviderContext);

    useEffect(() => {
        if (socket) {
            socket.on('get-user-info-response', ListenerGetCurrentUser)
            socket.emit('get-user-info')
        }

        return () => { }
    }, [socket])

    const ListenerGetCurrentUser = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        setCurrentUser({
            id: data.id,
            username: data.username,
            email: data.email,
            accessToken: localStorage.getItem('accessToken'),
            refreshToken: localStorage.getItem('refreshToken')
        })
        setLoading(false);
    }

    return (
        <GetCurrentUserProviderContext.Provider value={{ ...currentUser, loading }}>{children}</GetCurrentUserProviderContext.Provider>
    )
}