import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import styled from 'styled-components';
import Logo from '../../assets/Header.png';


const App: React.FC = ({ children }) => {
  return (
    <>
    <Nav dark>
      <Brand href={'/'}> <PSLogo  src={Logo}/> </Brand>
    </Nav>

    <Wrapper>
      {children}
    </Wrapper>
  </>
  );
}

export default App;

const Wrapper = styled.div`
`;

const Brand = styled(NavbarBrand)`
  display: flex;
`

const PSLogo = styled.img`
  height: 3.5rem;
  padding: 1rem;
  align-self: center;
`

const Nav = styled(Navbar)`
  background: #FFFFFF;
  height: 5rem;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
