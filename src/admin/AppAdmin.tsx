import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #1c1c1c;
    color: #ffffff;
`

interface AppAdminProps {
    setApp: (app: boolean) => void;
}

export const AppAdmin = ({ setApp }: AppAdminProps) => {
    const navigate = useNavigate();

    return (
        <Container>
            <h1>Admin</h1>
            <button onClick={() => { setApp(true); navigate("/home"); }}>Voltar</button>
            <Routes>
                <Route path="*" element={<Navigate to={"/dashboard"} />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Container>
    )
}