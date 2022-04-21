import styled from "styled-components";
import Card from "../../components/Card/Card";

const DisplayCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DisplayPage = styled.div`
  position: absolute;
  top: 50px;
`;
const Main = () => {
  const categories = [
    {
      id: 1,
      title: "museus",
      description: "museus, activitats i mes",
      activities: 12,
    },
    {
      id: 2,
      title: "parcs",
      description:
        "parcs urbans molt xulos, activitats especifiques en parcs urbans",
      activities: 5,
    },
  ];
  return (
    <DisplayPage>
      <h1>`Canallita`</h1>
      <DisplayCategories>
        {categories.map((category) => (
          <Card key={category.id} category={category} />
        ))}
      </DisplayCategories>
    </DisplayPage>
  );
};

export default Main;
