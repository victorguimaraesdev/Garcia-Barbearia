import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  border: 1px solid red;
  gap: 100px;
`;
const Card = styled.div`
  width: 30%;
  height: 90%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const CursosCard = () => {
  return (
    <Container>
      <Card></Card>
      <Card></Card>
    </Container>
  );
};
