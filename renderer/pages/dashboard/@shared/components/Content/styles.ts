import { styled } from "styled-components";

export const ContentStyled = styled.div`
    border-radius: ${props => props.theme.border_raidus};
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 1px solid ${props => props.theme.borders.secondary.color};
    padding: 10px;
    height: 100%;
`