import { LoadingStyled, SpinnerStyled } from "./styles"

type Props = {
    title?: string
}

export const Loading = ({ title = "Carregando..." }: Props) => {
    return (
        <LoadingStyled>
            <SpinnerStyled />
            {title}
        </LoadingStyled>
    )
}