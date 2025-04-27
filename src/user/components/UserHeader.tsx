import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as Link2, useLocation } from "react-router-dom";
import { Blur } from "../../utils/styles/blur";

const Barra = styled.div`
  width: 100%;
  height: 70px;
`;
const Container = styled.div`
  ${Blur()};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 16px;
  z-index: 3;
  font-weight: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    min-height: 70px;
    height: auto;
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 5px;
  width: 15%;
  height: auto;

  @media (max-width: 768px) {
    position: absolute;
    width: 30%;
    top: 25px;
    left: 10px;
  }
`;
const Esquerda = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  width: 50%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 80px;
    li {
      a {
        display: inline-block;
        color: var(--primaria);
        font-size: 1rem;
        opacity: 0.8;
        position: relative;
        transition: transform 0.5s ease, opacity 0.5s ease;

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primaria);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
          transform: scaleX(1);
        }

        &:hover {
          opacity: 1;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

      li a {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 20px;
  }
`;
const Direita = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 80px;
  width: 50%;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
      padding-bottom: 20px;

      li a {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 10px;
  }
`;
const Link = styled(Link2)`
  display: inline-block;
  color: var(--primaria);
  font-size: 1rem;
  opacity: 0.8;
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primaria);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    opacity: 1;
  }

  &.naRota::after {
    transform: scaleX(1);
  }

  &.naRota {
    opacity: 1;
  }
`;
const MenuToggle = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    color: var(--primaria);
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
    cursor: pointer;
  }
`;
export const UserHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <Barra />
            <Container>
                <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </MenuToggle>

                <Esquerda $isOpen={menuOpen}>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className={location.pathname === "/home" ? "naRota" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cursos"
                                onClick={() => setMenuOpen(false)}
                                className={location.pathname === "/cursos" ? "naRota" : ""}
                            >
                                Cursos
                            </Link>
                        </li>
                    </ul>
                </Esquerda>

                <Direita $isOpen={menuOpen}>
                    <ul>
                        <li>
                            <div>
                                <Link
                                    to="/agendamentos"
                                    onClick={() => setMenuOpen(false)}
                                    className={location.pathname === "/agendamentos" ? "naRota" : ""}
                                >
                                    Agendamentos
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/produtos"
                                onClick={() => setMenuOpen(false)}
                                className={location.pathname === "/produtos" ? "naRota" : ""}
                            >
                                Produtos
                            </Link>
                        </li>
                    </ul>
                </Direita>
                <Logo src="/logo/logo.png" draggable={false} />
            </Container>
        </>
    );
};