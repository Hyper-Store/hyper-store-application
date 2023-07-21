import { Col } from "react-bootstrap"
import { SideBar, SideBarProps } from "../SideBar"
import { ReactNode } from 'react';
import { Content } from "../Content";
import { RowStyled } from "./styles";
import { SocketWSProvider } from "../../context/SocketWS.context";
import { SignaturesProvider } from "../../context/Signatures.contex";
import { GetCurrentUserProvider } from "../../context/GetCurrentUser";

type Props = SideBarProps & {
    children: ReactNode
}

export const BaseDashboard = (props: Props) => {
    return (
        <SocketWSProvider>
            <GetCurrentUserProvider>
                <SignaturesProvider>
                    <RowStyled>
                        <Col md={3}>
                            <SideBar {...props} />
                        </Col>
                        <Col md={9}>
                            <Content {...props} />
                        </Col>
                    </RowStyled>
                </SignaturesProvider>
            </GetCurrentUserProvider>
        </SocketWSProvider>
    )
}