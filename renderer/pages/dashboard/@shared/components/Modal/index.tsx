import { ModalStyled } from "./styles"
import { Modal as ModalType } from 'react-bootstrap';

type Props = React.ComponentProps<typeof ModalType>;

export const Modal = (props: Props) => {
    return (
        <ModalStyled {...props} />
    )
}