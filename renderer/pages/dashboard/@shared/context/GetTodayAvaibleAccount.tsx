import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { SocketWSProviderContext } from './SocketWS.context';
import { WSBinaryCompile, WSBinaryConverter } from '../../../../utils/ws-binary-converter';
import { AccountHistoryType } from '../types/AccountHistory.type';

interface GetTodayAvaibleAccountProviderContextProps {
    accountsAvaible: number,
    quantityPerDay: number,
    loading: boolean
}

export const GetTodayAvaibleAccountProviderContext = createContext<GetTodayAvaibleAccountProviderContextProps>({} as GetTodayAvaibleAccountProviderContextProps);

type GetTodayAvaibleAccountProviderProps = {
    children: ReactNode,
    signatureId: string
}

export const GetTodayAvaibleAccountProvider = ({ children, signatureId }: GetTodayAvaibleAccountProviderProps) => {
    const [avaibleData, setAvaibleData] = useState({
        accountsAvaible: 0,
        quantityPerDay: 0
    })
    const [loading, setLoading] = useState<boolean>(true);

    const { socket } = useContext(SocketWSProviderContext);

    useEffect(() => {
        if (socket && signatureId) {
            socket.on('get-today-stock-info-response', ListenerGetTodayAvaibleAccounts)
            socket.emit('get-today-stock-info', WSBinaryCompile({
                signatureId
            }))
        }

        return () => { }
    }, [signatureId, socket])

    const ListenerGetTodayAvaibleAccounts = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        setAvaibleData({
            accountsAvaible: data.quantityPerDay - data.todayRedemptionCount,
            quantityPerDay: data.quantityPerDay
        })
        setLoading(false);
    }

    return (
        <GetTodayAvaibleAccountProviderContext.Provider value={{ accountsAvaible: avaibleData.accountsAvaible, quantityPerDay: avaibleData.quantityPerDay, loading }}>{children}</GetTodayAvaibleAccountProviderContext.Provider>
    )
}