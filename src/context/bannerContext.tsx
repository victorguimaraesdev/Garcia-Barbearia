import { createContext, useContext, useState, ReactNode } from "react";

interface BannerContextType {
  indexAtual: number;
  setIndexAtual: React.Dispatch<React.SetStateAction<number>>;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

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

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner deve ser usado dentro de um BannerProvider");
  }
  return context;
};
