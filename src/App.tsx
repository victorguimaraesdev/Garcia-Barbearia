import { Header } from "./components/header/header.tsx";
import { Agendamentos } from "./pages/agendamento/agendamentos.tsx";
import { Home } from "./pages/home/home";
import { Produtos } from "./pages/produtos/produtos.tsx";
import { Cursos } from "./pages/cursos/cursos.tsx";
import { Routes, Route } from "react-router-dom";
import { BannerProvider } from "./context/BannerProvider";
import { verificarToken } from "./utils/verificarToken.ts";

function App() {

    verificarToken();

    return (
        <>
            <Header />
            <BannerProvider>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/agendamentos" element={<Agendamentos />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/cursos" element={<Cursos />} />
                </Routes>
            </BannerProvider>
        </>
    );
}

export default App;
