import { Header } from "./components/header/header"
import { BannerProvider } from "./context/BannerProvider"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/home/home"
import { Agendamentos } from "./pages/agendamento/agendamentos"
import { Produtos } from "./pages/produtos/produtos"
import { Cursos } from "./pages/cursos/cursos"

export const AppUser = () => {
    return (
        <>
            <Header />
            <BannerProvider>
                <Routes>
                    <Route path="*" element={<Navigate to="/home" />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/agendamentos" element={<Agendamentos />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/cursos" element={<Cursos />} />
                </Routes>
            </BannerProvider>
        </>
    )
}