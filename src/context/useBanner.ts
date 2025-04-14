import { useContext } from "react";
import { BannerContext } from "./bannerContext";

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner deve ser usado dentro de um BannerProvider");
  }
  return context;
};
