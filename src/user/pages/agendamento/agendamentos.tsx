import styled from "styled-components";
import { AgendamentoCard } from "../../components/agendamentoCard/agendamentoCard";

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Agendamentos = () => {

  return (
    <Container>
      <AgendamentoCard />
    </Container>
  );
};