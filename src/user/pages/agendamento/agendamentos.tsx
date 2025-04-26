import styled from "styled-components";
import { AgendamentoCard } from "../../components/agendamentoCard/agendamentoCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Agendamentos = () => {

  return (
    <Container>
      <AgendamentoCard />
    </Container>
  );
};