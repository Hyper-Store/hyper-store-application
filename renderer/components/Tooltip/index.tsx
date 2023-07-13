import { ToolTipStyled } from "./styles"
import { ITooltip } from 'react-tooltip';

type TooltipProps = ITooltip

export const Tooltip = (props: TooltipProps) => {
    return (
        <ToolTipStyled {...props} />
    )
}