import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 70%;
`;
const H1 = styled.h1`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const Titulo = styled.div`
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: var(--primaria);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primaria);
`;
const Enviar = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const FormularioCard = () => {
  return (
    <Container>
      <H1>Agendamento</H1>

      <Campo>
        <Titulo>Nome:</Titulo>
        <Input type="text" />
      </Campo>

      <Campo>
        <Titulo>Data:</Titulo>
        <Input type="date" />
      </Campo>

      <Campo>
        <Titulo>Hora:</Titulo>
        <Input type="time" />
      </Campo>
      <Enviar> Agendar </Enviar>
    </Container>
  );
};
