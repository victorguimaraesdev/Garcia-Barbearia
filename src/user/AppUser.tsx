import { Header } from "./components/header/header"
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import { Cards } from "../utils/user/cardsHome"
import { Home } from "./pages/home/home"
import { Agendamentos } from "./pages/agendamento/agendamentos"
import { Produtos } from "./pages/produtos/produtos"
import { Cursos } from "./pages/cursos/cursos"
import styled from "styled-components"

const Imagem = styled.img<{ $ativa: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ $ativa }) => ($ativa ? 0.3 : 0)};
    transition: opacity 0.8s ease-in-out;
    z-index: 0;
`

export const AppUser = () => {

    const [indexAtual, setIndexAtual] = useState(0)

    return (
        <>
            <Header />
            {Cards.map((src, i) => (
                <Imagem key={i} src={src.imagens} $ativa={i === indexAtual} draggable={false} />
            ))}
            <Routes>
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home setIndexAtual={setIndexAtual} indexAtual={indexAtual} />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/cursos" element={<Cursos />} />
            </Routes>
        </>
    )
}