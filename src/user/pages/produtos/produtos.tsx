import styled, { keyframes } from "styled-components";
import { Cards } from "../../../utils/cardsHome";
import { useBanner } from "../../context/useBanner";
import {produtos} from "../../../utils/cardsProdutos";


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;


const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 60px 20px;
  gap: 40px;
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


const GridProdutos = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  z-index: 1;

  @media (max-width: 768px) {
   top: 20px;
  }
`;


const CardProduto = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  width: 280px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  opacity: 0;
  animation: ${fadeInUp} 0.7s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const TituloProduto = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const DescricaoProduto = styled.p`
  font-size: 1rem;
  font-weight: 100;
`;
const ContainerEncomentePreco = styled.a`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  `
const PrecoProduto = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--secundaria);
  margin-top: 10px;
  font-weight: 200;
`;
const BotaoEncomende = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
  background-color: rgba(51, 51, 51, 0.7);
  color: var(--primaria);
  border: none;
  width: 130px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: rgba(83, 83, 83, 0.7);
  }
`





export const Produtos = () => {
  const { indexAtual } = useBanner();

  return (
    <Container>
      {Cards.map((src, i) => (
        <Imagem key={i} src={src.imagens} $ativa={i === indexAtual} draggable={false} />
      ))}

      <GridProdutos>
        {produtos.map((produto, i) => (
          <CardProduto key={i} $delay={i * 0.3}>
            <ImagemProduto src={produto.imagem} alt={produto.titulo} />
            <TituloProduto>{produto.titulo}</TituloProduto>
            <DescricaoProduto>{produto.descricao}</DescricaoProduto>
            <ContainerEncomentePreco  href="https://api.whatsapp.com/send?phone=5515997316945"
              target="_blank"
              rel="noopener noreferrer">
               <PrecoProduto>{produto.preco}</PrecoProduto>
                <BotaoEncomende>Encomende</BotaoEncomende>
            </ContainerEncomentePreco>
          </CardProduto>
        ))}
      </GridProdutos>
    </Container>
  );
};
