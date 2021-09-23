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

const Login = ({ navigation })  => {
  return (
    <Container>
      <MainText>This is Login</MainText>
      <Button
        title="Login"
        color = "#60c0cc"
        onPress={() => navigation.navigate("SignUp")}
      />
    </Container>
  );
}

export default Login;