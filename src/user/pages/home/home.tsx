import { Banner } from "../../components/banner/banner";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface BannerProps {
  setIndexAtual: (index: number) => void;
  indexAtual: number;
}

export const Home = ({ setIndexAtual, indexAtual }: BannerProps) => {
  return (
    <Container>
      <Banner setIndexAtual={setIndexAtual} indexAtual={indexAtual} />
    </Container>
  );
};
