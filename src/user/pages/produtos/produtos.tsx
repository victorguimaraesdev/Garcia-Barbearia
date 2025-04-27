import styled from "styled-components";
import { ProdutoLista } from "./produtosLista";

const Container = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    
    padding-top: 6%;
    padding-bottom: 6%;
    height: calc(100% - 6%);

    @media (max-width: 768px) {
      padding-top: 10%;
      padding-bottom: 10%;
      height: calc(100% - 10%);
    }
`;

export const Produtos = () => {

    return (
        <Container>
            <ProdutoLista />
        </Container>
    );
};
