import { keyframes } from "styled-components";
import styled from "styled-components";
import { SubCardList } from "../../../utils/subCardsCursos";

const KeyFrame = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0px);
  }
`;

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
  height: 70%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  gap: 20px;
  opacity: 0;
  animation: ${KeyFrame} 1s ease-in-out forwards; ;
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
  gap: 10px;
  flex-wrap: wrap;
`;
const TituloCard = styled.h1`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  font-size: 1.5rem;
  font-weight: 450;
`;
const ParagrafoCard = styled.p`
  display: flex;
  font-size: 1rem;
  font-weight: 100;
`;
const ContainerSubCards = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: auto;
  gap: 10px;
  /* border: 2px solid var(--secundaria); */
  flex-wrap: wrap;
`;
const SubCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 50px;
  border-radius: 20px;
  background-color: rgba(51, 51, 51, 0.7);
  z-index: 1;
  gap: 7px;
  transition: 0.3s ease-in-out;

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
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: rgba(83, 83, 83, 0.7) ;
  }
  `;
const ContainerBotaoCard = styled.div`
  display: flex;
  position: relative;
  /* bottom: -50px; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  /* border: 2px solid red; */
`
const BotaoLink = styled.a`
  width: 100%;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <ContainerBotaoCard >
          <BotaoLink href="https://api.whatsapp.com/send?phone=5515997316945" target="_blank">
          <BotaoCard>Contato</BotaoCard>
            </BotaoLink>
          </ContainerBotaoCard >
        </InformacoesCard>
       
      </Card>
    </Container>
  );
};
