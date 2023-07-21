import { styled } from "styled-components";

export const ListAccounts = styled.table`
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Account = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.backgrounds.bgSecondary};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px 10px 10px 0;
    border-radius: ${props => props.theme.border_raidus};
`

export const AccountLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`

export const AccountIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    svg {
        font-size: 2rem;
    }
`

export const AccountDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const AccountDetailsValue = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme.texts.title};
    margin-bottom: 0;
`

export const AccountDetailsDate = styled.p`
    font-size: 0.6rem;
    color: ${props => props.theme.texts.subtitle};
    margin-bottom: 0;
`

export const AccountRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`