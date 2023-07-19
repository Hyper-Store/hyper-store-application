import { ReactNode } from 'react';
import { Button, ButtonGroup, ConfirmDialogStyled, Description, Icon, Title } from './styles';
import { MdWarning } from 'react-icons/md';

type Props = {
    show: boolean,
    type: "confirm" | "delete"
    title: string
    description: ReactNode,
    cardMessage?: string
    onSubmit?: () => void
    onClose?: () => void
}

export function ConfirmDialog(props: Props) {

    const handleSubmit = () => {
        props.onClose();
        props.onSubmit();
    }

    return (
        <>
            <ConfirmDialogStyled show={props.show} onHide={props.onClose} centered={true}>
                <Icon><MdWarning /></Icon>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <ButtonGroup>
                    <Button typeColor='primary' onClick={props.onClose}>Fechar</Button>
                    <Button typeColor='danger' onClick={handleSubmit}>
                        {props.type === "confirm" && "Confirmar"}
                        {props.type === "delete" && "Deletar"}
                    </Button>
                </ButtonGroup>
            </ConfirmDialogStyled >
            {/* {show && (
                <div className={styles.ConfirmDialog}>
                    <div className={styles.ConfirmDialog_Content}>
                        <div className={styles.icon}><MdWarning /></div>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.description}>{description}</p>

                        {cardMessage && (
                            <div className={styles.card}>{cardMessage}</div>
                        )}

                        <div className={styles.buttonGroup}>
                            <button type='button' className={classnames(styles.button, styles.button_primary)} onClick={onClose}>Fechar</button>
                            <button type='button' className={classnames(styles.button, styles.button_danger)} onClick={onConfirm}>
                                {type === "confirm" && "Confirmar"}
                                {type === "delete" && "Deletar"}
                            </button>
                        </div>
                    </div>
                </div>
            )} */}
        </>
    )
}