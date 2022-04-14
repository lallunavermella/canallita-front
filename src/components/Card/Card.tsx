import styled from "styled-components";
import { CardProp } from "../../types/CardProp";

const CardContainer = styled.section`
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  width: 70vw;
  height: 150px;
  border-radius: 25px;
`;

const Picture = styled.div`
  display: flex;
  background-color: pink;
  width: 150px;
  height: 150px;
  border-radius: 25px;
`;

const CardText = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  align-items: flex-start;
`;

const AlternativeText = styled.p`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

const Card = ({ category }: CardProp) => (
  <CardContainer>
    <Picture />
    <CardText>
      <Heading>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
      </Heading>
      <AlternativeText>{category.activities}</AlternativeText>
    </CardText>
  </CardContainer>
);

export default Card;
