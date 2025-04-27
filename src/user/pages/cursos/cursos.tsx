import styled from "styled-components";
import { CursosCard } from "../../components/cursosCard/cursosCard";

const Container = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    
    padding-top: 5%;
    padding-bottom: 5%;
    height: calc(100% - 5%);

    @media (max-width: 768px) {
      padding-top: 10%;
      padding-bottom: 10%;
      height: calc(100% - 10%);
    }
`;

export const Cursos = () => {

    return (
        <Container>
            <CursosCard />
        </Container>
    );
};
