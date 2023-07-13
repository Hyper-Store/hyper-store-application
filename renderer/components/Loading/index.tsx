import { LoadingStyled, SpinnerStyled } from "./styles"

export const Loading = () => {
    return (
        <LoadingStyled>
            <SpinnerStyled />
            Carregando...
        </LoadingStyled>
    )
}