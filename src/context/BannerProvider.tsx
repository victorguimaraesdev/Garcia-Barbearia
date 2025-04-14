import { useState, ReactNode } from "react";
import { BannerContext } from "./bannerContext";

interface BannerProviderProps {
  children: ReactNode;
}

export const BannerProvider = ({ children }: BannerProviderProps) => {
  const [indexAtual, setIndexAtual] = useState(0);

  return (
    <BannerContext.Provider value={{ indexAtual, setIndexAtual }}>
      {children}
    </BannerContext.Provider>
  );
};
