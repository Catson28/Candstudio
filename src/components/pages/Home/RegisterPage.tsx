import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Navbar from "../../partials/HomePartial/Navbar";
import { theme } from "../../../services/styles/Theme";
import Register from "../../partials/HomePartial/users/Register";
import { GlobalStyles } from "../../../services/styles/Global";

const BodyStyles = styled.body`
  //   background-size: cover;
  background-repeat: no-repeat;
  background-position: top 0 right 0;
  color: #1b2f5a;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

const RegisterPage = () => {
  const [heightHeader, setHeightHeader] = useState<number>(0);

  const handleHeightHeader = (value: number) => {
    setHeightHeader(value);
  };

  // Exemplo de uso da variável
  console.log(heightHeader); // Adicione isto temporariamente para evitar o erro

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BodyStyles>
        <Navbar homeHeader={handleHeightHeader} />
        <Register />
      </BodyStyles>
    </ThemeProvider>
  );
};

export default RegisterPage;
