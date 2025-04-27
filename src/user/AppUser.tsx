import { UserHeader } from "./components/UserHeader"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { Cards } from "../utils/user/cardsHome"
import { Home } from "./pages/home/Home"
import { Agendamentos } from "./pages/agendamentos/Agendamentos"
import { Produtos } from "./pages/produtos/Produtos"
import { Cursos } from "./pages/cursos/Cursos"
import styled from "styled-components"


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
    overflow-x: hidden;
    overflow-y: auto;

    width: 100%;
  
    padding-top: 6%;
    padding-bottom: 6%;
    height: calc(100% - 6%);

    @media (max-width: 768px) {
        padding-top: 10%;
        padding-bottom: 10%;
        height: calc(100% - 10%);
    }
`

export const AppUser = () => {
    const [indexAtual, setIndexAtual] = useState(0);
    const pageRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
		if (pageRef.current) {
			pageRef.current.scrollTo(0, 0);
		}
	}, [location]);

    return (
        <>
            {Cards.map((src, i) => (
                <Background key={i} src={src.imagens} $ativa={i === indexAtual} draggable={false} />
            ))}
            <ContainerAppUser>
                <UserHeader />
                <ContainerRoutes ref={pageRef}>
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