import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { data } from "react-router-dom";
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
const nomesMes = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const horarios = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

export const FormularioCard = () => {
  const [dias, setDias] = useState<Date[]>([]);
  const [diaSelecionado, setDiaSelecionado] = useState<Date | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(
    null
  );

  useEffect(() => {
    const hoje = new Date();
    const proximosDias: Date[] = [];

    for (let i = 0; i < 7; i++) {
      const outroDia = new Date(hoje);
      outroDia.setDate(hoje.getDate() + i);
      proximosDias.push(outroDia);
    }
    setDias(proximosDias);
  }, []);

  const EnviarParaAPI = async () => {
    if (!diaSelecionado || !horarioSelecionado) {
      return;
    }
    const dados = {
      dia: diaSelecionado.toISOString(),
    };
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/agendamentos",
        dados
      );
      alert(res.data.mensagem || "Agendamento realizado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao agendar: " + error);
    }
  };
  const [autorizado, setAutorizado] = useState(false);

  return (
    <Container>
      <H1>Informe a data e o horário do agendamento:</H1>
      <ContainerDias>
        {dias.map((dia, i) => (
          <BotaoDia
            key={i}
            $selecionado={diaSelecionado?.toDateString() === dia.toDateString()}
            onClick={() => setDiaSelecionado(dia)}
          >
            <DiaSemana>{nomesDias[dia.getDay()]}</DiaSemana>
            <DiaData>{dia.getDate()}</DiaData>
            <Mes>{nomesMes[dia.getMonth()]}</Mes>
          </BotaoDia>
        ))}
      </ContainerDias>
      <ContainerHorarios>
        {horarios.map((horario, i) => (
          <BotaoHorario
            key={i}
            $selecionado={horarioSelecionado === horario}
            onClick={() => setHorarioSelecionado(horario)}
          >
            {horario}
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
