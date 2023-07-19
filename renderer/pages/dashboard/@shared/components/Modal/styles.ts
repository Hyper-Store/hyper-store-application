import { css, styled } from "styled-components";
import { Modal } from 'react-bootstrap';

export const ModalStyled = styled(Modal)`
    div.modal-content {
        background: ${props => props.theme.backgrounds.bgSecondary};
        border: 1px solid ${props => props.theme.borders.primary.color};
        border-radius: ${props => props.theme.border_raidus};
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`