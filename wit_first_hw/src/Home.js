import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #000000;
`;

const Home = ()  => {
  return (
    <Container>
      <MainText>This is Home</MainText>
    </Container>
  );
}

export default Home;