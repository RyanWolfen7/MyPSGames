import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Wrapper } from '../../styles/styledComponents'

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
