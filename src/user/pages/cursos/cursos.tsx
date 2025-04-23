import styled from "styled-components";
import { Cards } from "../../../utils/cardsHome";
import { useBanner } from "../../context/useBanner";
import { CursosCard } from "../../components/cursosCard/cursosCard";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Imagem = styled.img<{ $ativa: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $ativa }) => ($ativa ? 0.3 : 0)};
  transition: opacity 0.8s ease-in-out;
  z-index: 0;
`;

export const Cursos = () => {
  const { indexAtual } = useBanner();

  return (
    <Container>
      {Cards.map((src, i) => (
        <Imagem
          key={i}
          src={src.imagens}
          $ativa={i === indexAtual}
          draggable={false}
        />
      ))}
      <CursosCard />
    </Container>
  );
};
