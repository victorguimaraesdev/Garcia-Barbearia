import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Login } from "../../googleAuth/Auth";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 80%;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
  }
`;

const H1 = styled.h1`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 100;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const Titulo = styled.div`
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: var(--primaria);

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primaria);

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Enviar = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const ContainerDias = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: center;
`;

const BotaoDia = styled.button<{ $selecionado: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ $selecionado }) =>
        $selecionado ? "rgba(134, 134, 134, 0.726)" : "rgba(255, 255, 255, 0.1)"};
  border: none;
  cursor: pointer;
  min-width: 65px;
  color: white;
  font-size: 0.8rem;

  @media (max-width: 480px) {
    min-width: 55px;
    padding: 8px;
  }
`;

const DiaSemana = styled.div`
  font-size: 10px;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const DiaData = styled.div`
  font-size: 25px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Mes = styled.div`
  font-size: 10px;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const ContainerHorarios = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;

const BotaoHorario = styled.button<{
    $selecionado: boolean;
    $disponivel: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ $selecionado }) =>
        $selecionado ? "rgba(134, 134, 134, 0.726)" : "rgba(255, 255, 255, 0.1)"};
  ${({ $disponivel }) =>
        $disponivel ? "" : "background-color: rgba(10, 10, 10, 0.4)"};
  color: white;
  border: none;
  cursor: pointer;
  min-width: 65px;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    min-width: 55px;
    font-size: 0.8rem;
  }
`;

const LoginGoole = styled.div`
  margin-top: 20px;
`;

const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const nomesMes = {
    "01": "Jan",
    "02": "Fev",
    "03": "Mar",
    "04": "Abr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Ago",
    "09": "Set",
    "10": "Out",
    "11": "Nov",
    "12": "Dez",
};

type Dias = {
    dia: string;
    data: string;
};
type Horarios = {
    hora: string;
    disponivel: boolean;
};

export const FormularioCard = () => {
    const [dias, setDias] = useState<Dias[]>([]);
    const [horario, setHorario] = useState<Horarios[]>([]);
    const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);
    const [horarioSelecionado, setHorarioSelecionado] = useState<Horarios | null>(
        null
    );
    const [nome, setNome] = useState("");

    //GET AXIUS
    const pegarInformacoes = useCallback(() => {
        axios
            .get("http://localhost:3000/api/agendamentos/dias")
            .then((res) => {
                setDias(res.data);
            })
            .catch((err) => console.log(err));

        if (!diaSelecionado) return;

        axios
            .get("http://localhost:3000/api/agendamentos/horarios", {
                params: { data: diaSelecionado },
            })
            .then((res) => {
                setHorario(res.data);
            })
            .catch((err) => console.log(err));
    }, [diaSelecionado]);

    useEffect(() => {
        pegarInformacoes();
    }, [pegarInformacoes]);

    const EnviarParaAPI = async () => {
        if (!diaSelecionado || !horarioSelecionado) {
            alert("Por favor, preencha todos os campos antes de agendar.");
            return;
        }
        const concatenado = `${diaSelecionado}T${horarioSelecionado?.hora}:00`;

        const date = {
            nome: nome,
            date: concatenado,
        };

        try {
            const res = await axios.post(
                "http://localhost:3000/api/agendamentos",
                date
            );
            alert(res.data.mensagem || "Agendamento realizado com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao agendar: " + error);
        }
    };

    const [autorizado, setAutorizado] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) setAutorizado(true);
    }, []);

    const pegarMes = (dia: string) => {
        const mes = dia.split("-")[1];
        return nomesMes[mes as keyof typeof nomesMes];
    };

    return (
        <Container>
            <H1>Informe o nome a data e o horário do agendamento:</H1>
            <Campo>
                <Titulo>Nome:</Titulo>
                <Input
                    type="text"
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </Campo>
            <ContainerDias>
                {dias?.map((dia, i) => (
                    <BotaoDia
                        key={i}
                        $selecionado={diaSelecionado === dia.data}
                        onClick={() => setDiaSelecionado(dia.data)}
                    >
                        <DiaSemana>{nomesDias[Number(dia.dia)]}</DiaSemana>
                        <DiaData>{dia.data.split("-")[2]}</DiaData>
                        <Mes>{pegarMes(dia.data)}</Mes>
                    </BotaoDia>
                ))}
            </ContainerDias>
            <ContainerHorarios>
                {horario.map((horario, i) => (
                    <BotaoHorario
                        key={i}
                        $selecionado={horarioSelecionado === horario}
                        onClick={() => setHorarioSelecionado(horario)}
                        $disponivel={horario.disponivel}
                    >
                        {horario.hora}
                    </BotaoHorario>
                ))}
            </ContainerHorarios>
            {autorizado ? (
                <Enviar onClick={EnviarParaAPI}> Agendar </Enviar>
            ) : (
                <LoginGoole>
                    <Login setAutorizado={setAutorizado} />
                </LoginGoole>
            )}
        </Container>
    );
};
