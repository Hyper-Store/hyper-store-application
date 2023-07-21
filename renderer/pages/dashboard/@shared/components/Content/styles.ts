import { styled } from "styled-components";

export const ContentStyled = styled.div`
    border-radius: ${props => props.theme.border_raidus};
    border: 1px solid ${props => props.theme.borders.secondary.color};
    padding: 10px;
    height: 80vh;
    overflow: auto;
`