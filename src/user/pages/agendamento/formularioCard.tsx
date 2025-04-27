import { useEffect, useState } from "react";
import { Login } from "../../googleAuth/Auth";
import styled from "styled-components";
import API from "../../../utils/API";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
    padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const H1 = styled.h1`
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
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
    flex-flow: row wrap;
    justify-content: center;
    gap: 5px;
`;

const TextoTela = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaria);
    font-size: 24px;
    text-align: center;
    width: 90%;
    height: 50px;

  @media (max-width: 1300px) {
    font-size: 16px;
  }
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
        !$disponivel &&
        `
      background-color: rgba(10, 10, 10, 0.4);
      pointer-events: none;
      opacity: 0.8;
    `}
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
  @media (max-width: 480px) {
    width: 100%;
  }
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

type Props = {
    onAgendamentoSucesso: () => void;
};

export const FormularioCard = ({ onAgendamentoSucesso }: Props) => {
    const [dias, setDias] = useState<Dias[]>([]);
    const [horario, setHorario] = useState<Horarios[]>([]);
    const [diaSelecionado, setDiaSelecionado] = useState<string | null>(null);
    const [horarioSelecionado, setHorarioSelecionado] = useState<Horarios | null>(null);
    const [nome, setNome] = useState("");
    const [menssagem, setMenssagem] = useState("");

    const pegarDias = async () => {
        const { data, status } = await API.GET("/agendamentos/dias");
        if (status === 200) setDias(data as Dias[]);
       
        if (status === 401) {
            setTimeout(() => {
                setMenssagem("Erro ao carregar os dias disponíveis.");
            }, 2000);
            setMenssagem("");
        }
    }

    const pegarHorarios = async (diaSelecionado: string) => {
        const { data: horarios, status: statusHorarios } = await API.GET(`/agendamentos/horarios/${diaSelecionado}`);
        if (statusHorarios === 200) setHorario(horarios as Horarios[]);

        if (statusHorarios === 401) {
            setTimeout(() => {
                setMenssagem("Erro ao carregar os horários disponíveis.");
            }, 2000);
            setMenssagem("");
        }
    }

    useEffect(() => {
        pegarDias();
    }, []);

    useEffect(() => {
        if (diaSelecionado) {
            pegarHorarios(diaSelecionado);
        }
    }, [diaSelecionado]);

    const EnviarParaAPI = async () => {
        if (!diaSelecionado || !horarioSelecionado) {
            setMenssagem("Selecione um dia e um horário.");
            setTimeout(() => {
                setMenssagem("");
            }, 2000);
            return;
        }
        const concatenado = `${diaSelecionado}T${horarioSelecionado?.hora}:00`;

        const date = {
            nome: nome,
            date: concatenado,
        };

        try {
            const { status } = await API.POST("/agendamentos", date);
            if (status === 200) {
                setMenssagem("Agendamento realizado com sucesso!");
                setTimeout(() => {
                    setMenssagem("");
                    onAgendamentoSucesso();
                }, 3000);
            }
            if (status === 401) {
                setMenssagem("Erro ao realizar o agendamento.");
                setTimeout(() => {
                    setMenssagem("");
                }, 2000);
            }
        } catch (error) {
            console.error(error);
            setMenssagem("Erro ao realizar o agendamento.");
            setTimeout(() => {
                setMenssagem("");
            }, 2000);
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
                        disabled={!horario.disponivel}
                    >
                        {horario.hora}
                    </BotaoHorario>
                ))}
            </ContainerHorarios>
            <TextoTela>{menssagem && <p>{menssagem}</p>}</TextoTela>
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
