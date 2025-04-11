import { Header } from "./components/header/header.tsx";
import { Agendamentos } from "./pages/agendamento/agendamentos.tsx";
import { Home } from "./pages/home/home";
import { Produtos } from "./pages/produtos/produtos.tsx";
import { Cursos } from "./pages/cursos/cursos.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/agendamentos",
//     element: <Agendamentos />,
//   },
// ]);
