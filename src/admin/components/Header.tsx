import { AppAdminProps } from '../AppAdmin';
import { useNavigate, useLocation } from 'react-router-dom';
import { TbDeviceIpadMinus } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--transparent);

    .Icon {
        height: 90%;
        width: auto;
        padding: 3px;
        border: 2px solid white;
        border-radius: 10px;
        cursor: pointer;
        &:active {
            background-color: var(--secundaria);
        }
        &:hover {
            background-color: var(--secundaria);
        }
    }

    .Selecionado {
        background-color: var(--secundaria);
    }
`

const routes: { [key: number]: string } = {
    1: "/home",
    2: "/caixa",
    3: "/agendamentos",
    4: "/comissao",
    5: "/dashboard",
};

export const Header = ({ setApp }: AppAdminProps) => {

    const navigate = useNavigate();
    const location = useLocation();

    const to = (path: number) => {
        return routes[path];
    }

    const HandleNavigate = (path: number) => {
        navigate(to(path));
    }

    const handleLocation = (path: number) => {
        if (location.pathname == to(path)) {
            return "Icon Selecionado";
        } else {
            return "Icon";
        }
    }

    return (
        <HeaderContainer>
            <IoMdArrowBack className={handleLocation(1)} onClick={() => { HandleNavigate(1); setApp(true) }} />
            <FaMoneyBill1Wave className={handleLocation(2)} onClick={() => { HandleNavigate(2) }} />
            <CiBookmarkCheck className={handleLocation(3)} onClick={() => { HandleNavigate(3) }} />
            <CiBoxList className={handleLocation(4)} onClick={() => { HandleNavigate(4) }} />
            <TbDeviceIpadMinus className={handleLocation(5)} onClick={() => { HandleNavigate(5) }} />
        </HeaderContainer>
    )
}