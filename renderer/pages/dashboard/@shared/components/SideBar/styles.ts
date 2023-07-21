import Image from "next/image";
import { styled } from "styled-components";

export const SideBarStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const SideBarListStyled = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
`

export const SideBarProctedBy = styled.p`
    font-family: 'Russo One';
    color: ${props => props.theme.texts.description};
    font-size: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    margin: 0;

    span {
        font-weight: 500;
        color: ${props => props.theme.colors.primary};
    }
`