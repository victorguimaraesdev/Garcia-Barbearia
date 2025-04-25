import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Caixa } from "./pages/Caixa";
import { Comissao } from "./pages/Comissao";
import { Agendamentos } from "./pages/Agendamentos";
import { Header } from "./components/Header";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background: var(--supp);
    color: #ffffff;
    overflow: hidden;
`

const Container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow: auto;
`

export interface AppAdminProps {
    setApp: (app: boolean) => void;
}

export const AppAdmin = ({ setApp }: AppAdminProps) => {
    return (
        <ContainerPrincipal>
            <Header setApp={setApp} />
            <Container>
                <Routes>
                    <Route path="*" element={<Navigate to={"/caixa"} />} />
                    <Route path="/caixa" element={<Caixa />} />
                    <Route path="/comissao" element={<Comissao />} />
                    <Route path="/agendamentos" element={<Agendamentos />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Container>
        </ContainerPrincipal>
    )
}