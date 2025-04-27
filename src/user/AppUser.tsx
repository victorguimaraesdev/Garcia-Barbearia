import { UserHeader } from "./components/UserHeader"
import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Cards } from "../utils/user/cardsHome"
import { Home } from "./pages/home/home"
import { Agendamentos } from "./pages/agendamento/agendamentos"
import { Produtos } from "./pages/produtos/produtos"
import { Cursos } from "./pages/cursos/cursos"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const Background = styled.img<{ $ativa: boolean }>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: ${({ $ativa }) => ($ativa ? 0.3 : 0)};
    transition: opacity 0.8s ease-in-out;
    z-index: -1;
    overflow: hidden;
`

const ContainerAppUser = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const ContainerRoutes = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const AppUser = () => {
    const [indexAtual, setIndexAtual] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            {Cards.map((src, i) => (
                <Background key={i} src={src.imagens} $ativa={i === indexAtual} draggable={false} />
            ))}
            <ContainerAppUser>
                <UserHeader />
                <ContainerRoutes>
                    <Routes>
                        <Route path="*" element={<Navigate to="/home" />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home setIndexAtual={setIndexAtual} indexAtual={indexAtual} />} />
                        <Route path="/agendamentos" element={<Agendamentos />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/cursos" element={<Cursos />} />
                    </Routes>
                </ContainerRoutes>
            </ContainerAppUser>
        </>
    );
};