import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as Link2 } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  position: fixed;
  padding: 0 1rem;
  z-index: 1000;
  font-weight: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
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

const Esquerda = styled.div<{ isOpen: boolean }>`
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
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

      li a {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
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
`;
const Direita = styled.div<{ isOpen: boolean }>`
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
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

      li a {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
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
    z-index: 1100;
    cursor: pointer;
  }
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>

      <Esquerda isOpen={menuOpen}>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cursos"}>Cursos</Link>
          </li>
        </ul>
      </Esquerda>

      <Direita isOpen={menuOpen}>
        <ul>
          <li>
            <div>
              <Link to="/agendamentos"> Agendamentos </Link>
            </div>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
      </Direita>
      <Logo src="/logo/logo.png" />
    </Container>
  );
};
