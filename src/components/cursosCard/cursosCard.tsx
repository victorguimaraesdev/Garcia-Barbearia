import styled from "styled-components";
import { SubCardList } from "../../utils/subCardsCursos";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  /* gap: 100px; */
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 65%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  gap: 20px;
`;
const ImagemCard = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
`;
const InformacoesCard = styled.div`
  padding: 20px;
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 5px;
  flex-wrap: wrap;
`;
const TituloCard = styled.h1`
  display: flex;
  font-size: 1.5rem;
`;
const ParagrafoCard = styled.p`
  display: flex;
  font-size: 1rem;
  font-weight: 100;
`;
const ContainerSubCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  gap: 10px;
  /* border: 2px solid var(--secundaria); */
`;
const SubCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  border-radius: 20px;
  background-color: rgba(51, 51, 51, 0.7);
  z-index: 1;
  gap: 7px;

`;
const Icone = styled.img`
  width: 40px;
  height: 40px;
`;
const TituloSubCard = styled.h1`
  display: flex;
  font-size: 1rem;
  font-weight: 100;
`;
const BotaoCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
  border-radius: 10px;
  font-size: 1rem;
  background-color: rgba(51, 51, 51, 0.7);
  z-index: 1;
  color: var(--primaria);
  border: none;
  `;

export const CursosCard = () => {
  return (
    <Container>
      <Card>
        <ImagemCard src="/cursos/tesouras.jpg" />
        <InformacoesCard>
          <TituloCard>Curso de Barbeiro Profissional</TituloCard>
          <ParagrafoCard>
            Aprenda as técnicas que transformam cortes em arte. No nosso curso
            completo, você vai dominar o degradê com precisão, o design de
            sobrancelhas, a modelagem de barba e bigode, além de receber
            orientações práticas sobre atendimento e estilo. Esse curso é ideal
            tanto para iniciantes quanto para quem deseja se aperfeiçoar, com
            certificação e prática real em modelos. Garanta sua vaga e comece a
            transformar seu talento em profissão com quem realmente entende do
            assunto. Garcias Barbershop – Onde nascem os melhores barbeiros.
          </ParagrafoCard>
          <ContainerSubCards>
            {SubCardList.map((SubCardList, i) => (
            <SubCard key={i}>
                <Icone src={SubCardList.icones} />
                <TituloSubCard>{SubCardList.titulo}</TituloSubCard>
              </SubCard>
            ))}
          </ContainerSubCards>
          <ContainerSubCards>
          <BotaoCard>Inscreva-se</BotaoCard>
          </ContainerSubCards>
        </InformacoesCard>
       
      </Card>
    </Container>
  );
};
