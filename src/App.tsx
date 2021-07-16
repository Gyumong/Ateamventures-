import React from "react";
import Nav from "./component/Nav";
import styled from "styled-components";
const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <AppLayout>
      <Nav />
      <div>dd</div>
    </AppLayout>
  );
};

export default App;
