import styled from "styled-components";
import { ReactNode } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: rgba(19, 19, 19, 0.9);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const BotaoFechar = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

type Props = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ isOpen, children, onClose }: Props) => {
  if (isOpen) {
    return (
      <Overlay>
        <Container>
          <BotaoFechar onClick={onClose}>X</BotaoFechar>
          {children}
        </Container>
      </Overlay>
    );
  }
  return null;
};
