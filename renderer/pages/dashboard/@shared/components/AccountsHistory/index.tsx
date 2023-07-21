import { ReactNode } from 'react';
import { Account, AccountDetails, AccountDetailsDate, AccountDetailsValue, AccountIcon, AccountLeft, AccountRight, ListAccounts } from './styles';
import { Button } from '../../../../../components/Form/Button';
import { BiCopy } from 'react-icons/bi';
import { CopyContent } from '../../utils/copyContent';

export type AccountsType = {
    value: string,
    dateTimeRedeemed: Date
}

type Props = {
    icon: ReactNode,
    accounts: AccountsType[]
}

export const AccountsHistory = (props: Props) => {

    const handleCopy = (account: string) => {
        CopyContent({
            content: account,
            message: 'A conta foi copiada com sucesso para sua área de transferência!'
        })
    }

    return (
        <ListAccounts>
            {props.accounts.map((a, i) => (
                <Account>
                    <AccountLeft>
                        <AccountIcon>{props.icon}</AccountIcon>
                        <AccountDetails>
                            <AccountDetailsValue>{a.value}</AccountDetailsValue>
                            <AccountDetailsDate>Gerada há: <code>{new Date(a.dateTimeRedeemed).toLocaleString()}</code></AccountDetailsDate>
                        </AccountDetails>
                    </AccountLeft>
                    <AccountRight>
                        <Button style={{ padding: '10px 14px' }} onClick={() => { handleCopy(a.value) }}><BiCopy /></Button>
                    </AccountRight>
                </Account>
            ))}
        </ListAccounts>
    )
}