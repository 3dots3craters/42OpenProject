import styled from "styled-components/native";

export const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  padding: 10px;
  border-width: 5.5px;
  border-color: ${({ lightEffect }) =>
    lightEffect == true ? "green" : "black"};
  tintColor: ${({ lightEffect }) =>
  lightEffect == true ? "green" : "null"};
  opacity: ${({ lightEffect }) =>
  lightEffect == true ? "0.8" : "1"};
  border-radius: 20px;
`;

export const StyledText = styled.Text`
  flex : 1;
  font-size: 16px;
  font-family: BlackHanSans_400Regular;
  text-align: center;
  color : ${({ lightEffect }) =>
  lightEffect == true ? "green" : "black"};
  opacity: ${({ lightEffect }) =>
  lightEffect == true ? "0.8" : "1"};
`;
