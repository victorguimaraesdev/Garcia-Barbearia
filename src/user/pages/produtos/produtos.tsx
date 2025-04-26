import styled from "styled-components";
import { produtos } from "../../../utils/cardsProdutos";
import { keyframes } from "styled-components";

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
  padding-top: 100px;
  width: 100vw;
  min-height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const GridProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const CardProduto = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  height: 350px;
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
  height: 200px;
  width: auto;
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

  return (
    <Container>
      <GridProdutos>
        {produtos.map((produto, i) => (
          <CardProduto key={i} $delay={i * 0.3}>
            <ImagemProduto src={produto.imagem} alt={produto.titulo} />
            <TituloProduto>{produto.titulo}</TituloProduto>
            <DescricaoProduto>{produto.descricao}</DescricaoProduto>
            <ContainerEncomentePreco href="https://api.whatsapp.com/send?phone=5515997316945"
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
