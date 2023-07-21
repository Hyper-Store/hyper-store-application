import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { SocketWSProviderContext } from './SocketWS.context';
import { WSBinaryCompile, WSBinaryConverter } from '../../../../utils/ws-binary-converter';
import { AccountHistoryType } from '../types/AccountHistory.type';
import { SignaturesProviderContext } from './Signatures.contex';

interface AccountsHistoryProviderContextProps {
    accounts: AccountHistoryType[],
    loading: boolean,
    nextCurrentPage: () => void,
    previousCurrentPage: () => void
}

export const AccountsHistoryProviderContext = createContext<AccountsHistoryProviderContextProps>({} as AccountsHistoryProviderContextProps);

type AccountsHistoryProviderProps = {
    children: ReactNode,
    signatureId: string
}

export const AccountsHistoryProvider = ({ children, signatureId }: AccountsHistoryProviderProps) => {
    const [accounts, setAccounts] = useState<AccountHistoryType[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [alreadyLimited, setAlreadyLimited] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { socket } = useContext(SocketWSProviderContext);

    useEffect(() => {
        if (socket && signatureId) {
            socket.on('get-redeemed-stock-result', ListenerAccountsHistory)
            socket.emit('get-redeemed-stock', WSBinaryCompile({
                signatureId,
                page: currentPage
            }))
        }

        return () => { }
    }, [signatureId, socket])

    const ListenerAccountsHistory = (message: BinaryData) => {
        const data = WSBinaryConverter(message);
        if (data.length < 1) return setAlreadyLimited(true);
        setAccounts([...accounts, ...data]);
        console.log([...accounts, ...data])
        setLoading(false);
    }

    const updateList = () => {
        socket.emit('get-redeemed-stock', WSBinaryCompile({
            signatureId,
            page: currentPage
        }))
    }

    const previousCurrentPage = () => {
        if (currentPage < 1) return;
        updateList();
        setCurrentPage(currentPage - 1);
    }

    const nextCurrentPage = () => {
        if (alreadyLimited) return;
        updateList();
        setCurrentPage(currentPage + 1);
    }


    return (
        <AccountsHistoryProviderContext.Provider value={{ accounts, loading, previousCurrentPage, nextCurrentPage }}>{children}</AccountsHistoryProviderContext.Provider>
    )
}