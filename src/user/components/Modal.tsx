import styled, { keyframes, css } from "styled-components";
import { ReactNode, useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Blur } from "../../utils/styles/blur";

// Animação de entrada para telas grandes
const slideInLarge = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9); /* Mantém a posição central */
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); /* Mantém a posição central */
  }
`;

// Animação de saída para telas grandes
const slideOutLarge = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); /* Mantém a posição central */
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9); /* Mantém a posição central */
  }
`;

// Animação de entrada para telas pequenas
const slideInSmall = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Animação de saída para telas pequenas
const slideOutSmall = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const Overlay = styled.div`
    ${Blur()}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
`;

const Container = styled.div<{ $isClosing: boolean }>`
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

    animation: ${({ $isClosing }) =>
        $isClosing
            ? css`
            ${slideOutLarge} 0.3s ease-out
          `
            : css`
            ${slideInLarge} 0.3s ease-out
          `};

    @media (max-width: 1200px) {
      background-color: #1c1c1c;
      width: 100%;
      height: 100%;
      border-radius: 0px;
      top: 0;
      left: 0;
      transform: translateY(0);
      animation: ${({ $isClosing }) =>
        $isClosing
            ? css`
              ${slideOutSmall} 0.3s ease-out
            `
            : css`
              ${slideInSmall} 0.3s ease-out
            `};
    }
`;

const BotaoFechar = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
`;

type Props = {
    children: ReactNode;
    closeModal: () => void;
};

export const Modal = ({ children, closeModal }: Props) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            closeModal();
        }, 250);
    };

    return (
        <Overlay onClick={handleClose}>
            <Container $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
                <BotaoFechar onClick={handleClose} />
                {children}
            </Container>
        </Overlay>
    );
};