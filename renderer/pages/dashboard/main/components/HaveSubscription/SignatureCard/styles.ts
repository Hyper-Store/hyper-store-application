import { styled } from "styled-components"

export const SignatureCardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    background: ${props => props.theme.backgrounds.bgSecondary};
    border: 1px solid ${props => props.theme.borders.primary.color};
    padding: 10px 10px 10px 0;
    border-radius: ${props => props.theme.border_raidus};
`

export const Icon = styled.div<{ iconColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;

    svg {
        font-size: 1.5rem;
        color: ${props => props.iconColor};
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: ${props => props.theme.texts.title};
    margin-bottom: 0;
`

export const About = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.6rem;
`

export const Description = styled.p`
    font-size: 0.6rem;
    color: ${props => props.theme.texts.subtitle};
    margin-bottom: 0;
`