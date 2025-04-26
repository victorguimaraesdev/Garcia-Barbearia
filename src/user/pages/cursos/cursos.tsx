import styled from "styled-components";
import { CursosCard } from "../../components/cursosCard/cursosCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Cursos = () => {

  return (
    <Container>
      <CursosCard />
    </Container>
  );
};
