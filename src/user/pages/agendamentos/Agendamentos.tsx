import styled, { keyframes } from "styled-components";
import { Cards } from "../../../utils/user/cardsAgendamentos.ts";
import { Modal } from "../../components/Modal.tsx";
import { useState } from "react";
import { FormularioCard } from "./FormularioCard.tsx";

const KeyFrame = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;

const Card = styled.div<{ $delay: number }>`
  width: 60%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--primaria);
  font-size: 1.2rem;
  border-radius: 10px;
  z-index: 1;
  animation: ${KeyFrame} 0.6s ease forwards;
  animation-delay: ${(props) => props.$delay}s;
  opacity: 0;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 15px;
    width: 95%;
  }

`;

const ContainerInicio = styled.div`
  display: flex;
  height: 100%;
  width: 250px;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const ContainerInformações = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  font-weight: 200;
`;

const Corte = styled.div`
  width: 100%;
  height: auto;
  word-break: break-word;
`;

const Valor = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 0.9rem;
  color: var(--secundaria);
`;

const Botão = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: rgb(51, 51, 51);
  color: var(--primaria);
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: rgba(83, 83, 83, 0.7);
  }

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const Agendamentos = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      {Cards.map((_, i) => (
        <Card key={i} $delay={i * 0.2}>
          <ContainerInicio>
            <Logo src="/logo/logo.png" draggable={false} />
            <ContainerInformações>
              <Corte>{Cards[i].Corte}</Corte>
              <Valor>{Cards[i].Valor}</Valor>
            </ContainerInformações>
          </ContainerInicio>
          <Botão onClick={() => setOpenModal(true)}>Agendar</Botão>
        </Card>
      ))}
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)}>
          <FormularioCard onAgendamentoSucesso={() => setOpenModal(false)} />
        </Modal>
      )}
    </Container>
  );
};
