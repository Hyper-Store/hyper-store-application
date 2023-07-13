import { Col } from "react-bootstrap"
import { SideBar, SideBarProps } from "../SideBar"
import { ReactNode } from 'react';
import { Content } from "../Content";
import { RowStyled } from "./styles";

type Props = SideBarProps & {
    children: ReactNode
}

export const BaseDashboard = (props: Props) => {
    return (
        <RowStyled>
            <Col md={3}>
                <SideBar {...props} />
            </Col>
            <Col md={9}>
                <Content {...props} />
            </Col>
        </RowStyled>
    )
}