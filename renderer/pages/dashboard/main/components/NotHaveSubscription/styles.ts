import { styled } from "styled-components";

export const NotHaveSubscriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`

export const IconStyled = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.yellow};
    }
`

export const TitleStyled = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 2px;
`

export const DescriptionStyled = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${props => props.theme.texts.subtitle};
`