import { createContext } from "react";

interface BannerContextType {
  indexAtual: number;
  setIndexAtual: React.Dispatch<React.SetStateAction<number>>;
}

export const BannerContext = createContext<BannerContextType | undefined>(
  undefined
);
