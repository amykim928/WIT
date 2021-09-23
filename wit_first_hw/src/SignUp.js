import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

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

const SignUp = ({ navigation })  => {
  return (
    <Container>
      <MainText>This is SignUp</MainText>
      <Button
        title="SignUp"
        color = "#60c0cc"
        onPress={() => navigation.navigate("Tab")}
      />
    </Container>
  );
}

export default SignUp;