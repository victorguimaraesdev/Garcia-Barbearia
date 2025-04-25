import { Banner } from "../../components/banner/banner";

interface BannerProps {
  setIndexAtual: (index: number) => void;
  indexAtual: number;
}

export const Home = ({setIndexAtual, indexAtual}: BannerProps) => {
  return (
    <div>
      <Banner setIndexAtual={setIndexAtual} indexAtual={indexAtual}/>
    </div>
  );
};
  