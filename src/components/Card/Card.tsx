import styled from "styled-components";

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

interface Data {
  title: string;
  description: string;
  activities: number;
}

const Card = ({ title, description, activities }: Data) => (
  <CardContainer>
    <Picture />
    <CardText>
      <Heading>
        <h2>{title}</h2>
        <p>{description}</p>
      </Heading>
      <AlternativeText>{activities}</AlternativeText>
    </CardText>
  </CardContainer>
);

export default Card;
