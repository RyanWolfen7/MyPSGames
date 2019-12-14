import React, { useState } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import styled from 'styled-components';
import Logo from '../../assets/Header.png';

const NavBar: React.FC = () => {
  const loginModalTrigger = useState<boolean>(false)

  return (
    <>
      <Nav height={'2rem'} backgroundColor={'black'} justifyContent={'flex-end'}>
        <Brand href={'https://www.sony.com/'}> <Sony> Sony </Sony> </Brand>
      </Nav>
      <Nav dark>
        <Brand href={'/'}> <PSLogo  src={Logo}/> </Brand>
        <Button> Sign In </Button>
      </Nav>
    </>
  );
}

export default NavBar;

const Sony = styled.a`
  color: white;
  padding: .5rem;
  font-family: Georgia, serif;
  font-weight: bold;
`

const Button = styled.button`
  align-self: center;
  color: white;
  background: black;
  height: 3rem;
  width: 6rem;
  margin: 1.5rem;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 1rem;
`

const Brand = styled(NavbarBrand)`
  display: flex;
  text-decoration: none;
`

const PSLogo = styled.img`
  height: 3.5rem;
  padding: 1rem;
  align-self: center;
`

const Nav = styled(Navbar)`
  background: ${ props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
  height: ${props => props.height ? props.height : '5rem'};
  flex-direction: row;
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
`;