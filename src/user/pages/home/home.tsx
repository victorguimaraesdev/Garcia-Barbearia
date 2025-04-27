import { Banner } from "../../components/banner/banner";
import styled from "styled-components";

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
