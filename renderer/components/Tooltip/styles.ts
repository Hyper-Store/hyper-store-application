import { Tooltip } from "react-tooltip";
import { styled } from "styled-components";

export const ToolTipStyled = styled(Tooltip)`
    background: ${props => props.theme.backgrounds.bgDark} !important;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    opacity: 1;
    z-index: 1000;
`