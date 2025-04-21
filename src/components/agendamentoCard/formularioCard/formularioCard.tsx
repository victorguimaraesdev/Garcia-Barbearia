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
`;
const H1 = styled.h1`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 100;
  @media (max-width: 768px) {
    margin-bottom: 20px;
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
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primaria);
`;

const Enviar = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
const ContainerDias = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
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
  border: white;
  cursor: pointer;
  min-width: 65px;
  color: white;
`;
const DiaSemana = styled.div`
  font-size: 10px;
`;
const DiaData = styled.div`
  font-size: 25px;
`;
const Mes = styled.div`
  font-size: 10px;
`;
const ContainerHorarios = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const BotaoHorario = styled.button<{ $selecionado: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ $selecionado }) =>
    $selecionado ? "rgba(134, 134, 134, 0.726)" : "rgba(255, 255, 255, 0.1)"};
  color: white;
  border: white;
  cursor: pointer;
  min-width: 65px;
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
  Disponivel: boolean;
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

    axios
      .get("http://localhost:3000/api/agendamentos/horarios", {
        params: { data: diaSelecionado },
      })
      .then((res) => {
        console.log(res.data);
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
    const data = {
      dia: diaSelecionado,
      nome: nome,
      horario: horarioSelecionado,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/agendamentos",
        data
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
