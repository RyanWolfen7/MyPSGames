import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';


const App: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
`;
