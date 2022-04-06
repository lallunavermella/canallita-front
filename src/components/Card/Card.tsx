import React from "react";
import styled from "styled-components";

const CardContainer = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 70vw;
  border-radius: 25px;
`;

const Card = () => (
  <CardContainer>
    <div />
    <h2>Category</h2>
    <p>Category description</p>
    <p>Activity Number</p>
  </CardContainer>
);

export default Card;
