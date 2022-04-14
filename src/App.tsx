import React from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/Card/Card";

const DisplayCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const App = (): JSX.Element => {
  const categories = [
    {
      title: "museus",
      description: "museus, activitats i mes",
      activities: 12,
    },
    {
      title: "parcs",
      description:
        "parcs urbans molt xulos, activitats especifiques en parcs urbans",
      activities: 5,
    },
  ];
  return (
    <DisplayCategories>
      {categories.map((category) => (
        <Card
          key={category.title}
          title={category.title}
          description={category.description}
          activities={category.activities}
        />
      ))}
    </DisplayCategories>
  );
};

export default App;
