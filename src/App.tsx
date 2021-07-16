import React from "react";
import Nav from "./component/Nav";
import styled from "styled-components";
import DashBoard from "./component/DashBoard";
const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <AppLayout>
      <Nav />
      <DashBoard />
    </AppLayout>
  );
};

export default App;
