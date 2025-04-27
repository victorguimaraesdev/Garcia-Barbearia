import styled, { keyframes } from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Cards } from "../../../utils/user/cardsHome.ts";

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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

const ArrowLeft = styled(SlArrowLeft)`
  position: fixed;
  bottom: 50%;
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
  position: fixed;
  bottom: 50%;
  right: 4rem;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--primaria);
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    right: 2rem;
  }
`;

const PseudoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20vh;
  width: 300px;
  height: 300px;

  animation: ${KeyFrame} 1s ease-in-out;
`;

const Icone = styled.img<{ $ativo: boolean }>`
  display: ${({ $ativo }) => ($ativo ? "flex" : "none")};
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  transition: 1s;
  opacity: ${({ $ativo }) => ($ativo ? 0.9 : 0)};
  animation: ${({ $ativo }) => ($ativo ? KeyFrame : "none")} 1s ease-in-out;
`;

const H1 = styled.h1<{ $ativo: boolean }>`
  display: ${({ $ativo }) => ($ativo ? "flex" : "none")};
  color: var(--primaria);
  font-size: clamp(1.5rem, 4vw, 3rem);
  opacity: ${({ $ativo }) => ($ativo ? 0.8 : 0)};
  transition: 1s;
  text-align: justify;
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  animation: ${({ $ativo }) => ($ativo ? KeyFrame : "none")} 1.3s ease-in-out;
`;

const Descricao = styled.p<{ $ativo: boolean }>`
  display: ${({ $ativo }) => ($ativo ? "flex" : "none")};
  color: var(--primaria);
  font-size: clamp(1.5rem, 4vw, 3rem);
  text-align: justify;
  font-weight: 100;
  font-size: 20px;
  text-align: center;
  transition: 1s;
  opacity: ${({ $ativo }) => ($ativo ? 0.9 : 0)};
  animation: ${({ $ativo }) => ($ativo ? KeyFrame : "none")} 1.8s ease-in-out;
`;

const Bolinha = styled.div<{ $selecionado: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ $selecionado }) => ($selecionado ? "white" : "none")};
`;

const CaixaBolinha = styled.div`
    position: fixed;
    bottom: 50px;
    right: calc(50% - 50px);
    width: 100px;
    gap: 10px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
`;

interface BannerProps {
    setIndexAtual: (index: number) => void;
    indexAtual: number;
}

export const Home = ({ setIndexAtual, indexAtual }: BannerProps) => {

    const trocarImagem = (direcao: "Proxima" | "Anterior") => {
        if (direcao === "Proxima") {
            const novoIndex = indexAtual + 1;
            setIndexAtual(novoIndex >= Cards.length ? 0 : novoIndex);
        } else {
            const novoIndex = indexAtual - 1;
            setIndexAtual(novoIndex < 0 ? Cards.length - 1 : novoIndex);
        }
    };

    return (
            <Container>
                <ArrowLeft onClick={() => trocarImagem("Anterior")} />
                <ArrowRight onClick={() => trocarImagem("Proxima")} />
                <CaixaBolinha>
                    {Cards.map((_, i) => (
                        <Bolinha key={i} $selecionado={i === indexAtual} />
                    ))}
                </CaixaBolinha>
                <PseudoCard>
                    <Caixa>
                        {Cards.map((src, i) => (
                            <Icone key={i} src={src.icones} $ativo={i === indexAtual} draggable={false} />
                        ))}
                    </Caixa>
                    <Caixa>
                        {Cards.map(({ titulo }, i) => (
                            <H1 key={i} $ativo={i === indexAtual}>
                                {titulo}
                            </H1>
                        ))}
                    </Caixa>
                    <Caixa>
                        {Cards.map(({ descricao }, i) => (
                            <Descricao key={i} $ativo={i === indexAtual}>
                                {descricao}
                            </Descricao>
                        ))}
                    </Caixa>
                </PseudoCard>
            </Container>
    );
};
