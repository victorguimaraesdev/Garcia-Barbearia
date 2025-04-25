import styled from "styled-components";
import { CursosCard } from "../../components/cursosCard/cursosCard";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Cursos = () => {

  return (
    <Container>
      <CursosCard />
    </Container>
  );
};
