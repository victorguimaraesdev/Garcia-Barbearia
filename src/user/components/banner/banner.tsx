import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styled, { keyframes } from "styled-components";
import { Cards } from "../../../utils/cardsHome.ts";
import { useBanner } from "../../context/useBanner.ts";


const KeyFrame = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0px);
  }
`;
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

const ArrowLeft = styled(SlArrowLeft)`
  position: absolute;
  left: 4rem;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--primaria);
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    left: 2rem;
  }
`;

const ArrowRight = styled(SlArrowRight)`
  position: absolute;
  right: 4rem;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--primaria);
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    right: 2rem;
  }
`;
const Bolinha = styled.div<{ $selecionado: boolean }>`
  position: relative;
  top: 300px;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ $selecionado }) => ($selecionado ? "white" : "none")};
`;
const PseudoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 16%;
  height: 400px;
  z-index: 1;
  animation: ${KeyFrame} 1s ease-in-out;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

const Icone = styled.img<{ $ativo: boolean }>`
  position: absolute;
  color: var(--primaria);
  font-size: clamp(1.5rem, 4vw, 3rem);
  z-index: 1;
  opacity: ${({ $ativo }) => ($ativo ? 0.9 : 0)};
  transition: 1s;
  width: 200px;
  height: auto;
  top: 0;
  animation: ${({ $ativo }) => ($ativo ? KeyFrame : "none")} 1s ease-in-out;
`;

const H1 = styled.h1<{ $ativo: boolean }>`
  position: absolute;
  color: var(--primaria);
  font-size: clamp(1.5rem, 4vw, 3rem);
  z-index: 1;
  opacity: ${({ $ativo }) => ($ativo ? 0.8 : 0)};
  transition: 1s;
  text-align: justify;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  border-radius: 15px;
  top: 210px;
  animation: ${({ $ativo }) => ($ativo ? KeyFrame : "none")} 1.3s ease-in-out;
`;
const Descricao = styled.p<{ $ativo: boolean }>`
  position: absolute;
  color: var(--primaria);
  font-size: clamp(1.5rem, 4vw, 3rem);
  z-index: 1;
  opacity: ${({ $ativo }) => ($ativo ? 0.9 : 0)};
  transition: 1s;
  text-align: justify;
  font-weight: 100;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  top: 260px;
  animation: ${({ $ativo }) => ($ativo ? KeyFrame : "none")} 1.8s ease-in-out;
`;

export const Banner = () => {
    const { indexAtual, setIndexAtual } = useBanner();

    const trocarImagem = (direcao: "Proxima" | "Anterior") => {
        setIndexAtual((prev) => {
            if (direcao === "Anterior") {
                if (prev === 0) {
                    return Cards.length - 1;
                } else {
                    return prev - 1;
                }
            } else {
                if (prev === Cards.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            }
        });
    };

    return (
        <Container>
            <ArrowLeft onClick={() => trocarImagem("Anterior")} />
            <ArrowRight onClick={() => trocarImagem("Proxima")} />
            {Cards.map((src, i) => (
                <Imagem key={i} src={src.imagens} $ativa={i === indexAtual} draggable={false} />
            ))}
            {Cards.map((_, i) => (
                <Bolinha key={i} $selecionado={i === indexAtual} />
            ))}
            <PseudoCard>
                {Cards.map((src, i) => (
                    <Icone key={i} src={src.icones} $ativo={i === indexAtual} draggable={false} />
                ))}
                {Cards.map(({ titulo }, i) => (
                    <H1 key={i} $ativo={i === indexAtual}>
                        {titulo}
                    </H1>
                ))}
                {Cards.map(({ descricao }, i) => (
                    <Descricao key={i} $ativo={i === indexAtual}>
                        {descricao}
                    </Descricao>
                ))}
            </PseudoCard>
        </Container>
    );
};
