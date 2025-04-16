import styled, { keyframes } from "styled-components";
import { Cards } from "../../utils/cardsAgendamentos.ts";
import { Modal } from "../modal/modal.tsx";
import { useState } from "react";

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
  min-height: 100%;
  width: 100%;
  /* margin-top: 100px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  color: var(--primaria);
  font-size: 1.2rem;
  z-index: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1rem;
    margin-top: 90px;
  }
`;

const Card = styled.div<{ delay: number }>`
  width: 60%;
  min-height: 100px;
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
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    width: 95%;
  }
`;

const ContainerInicio = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 100%;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
  height: auto;
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
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--contraste);
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const AgendamentoCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      {Cards.map((_, i) => (
        <Card key={i} delay={i * 0.2}>
          <ContainerInicio>
            <Logo src="/logo/logo.png" />
            <ContainerInformações>
              <Corte>{Cards[i].Corte}</Corte>
              <Valor>{Cards[i].Valor}</Valor>
            </ContainerInformações>
          </ContainerInicio>
          <Botão onClick={() => setOpenModal(true)}>Agendar</Botão>
        </Card>
      ))}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h1>Olá</h1>
      </Modal>
    </Container>
  );
};
