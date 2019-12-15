import React, { useState } from 'react';
import Logo from '../../assets/Header.png';
import AddGameModal from '../AddGameModal/AddGameModal';
import { Nav, Brand, Button, PSLogo, Sony } from  '../../styles/styledComponents'

const NavBar: React.FC = () => {
  const [addGameModal, setAddGameModal] = useState<boolean>(false)

  const toggleModal = () => { 
    setAddGameModal(!addGameModal)
  };

  return (
    <>
      <Nav height={'2rem'} backgroundColor={'black'} justifyContent={'flex-end'}>
        <Brand href={'https://www.sony.com/'}> <Sony> Sony </Sony> </Brand>
      </Nav>
      <Nav>
        <Brand href={'/'}> <PSLogo  src={Logo}/> </Brand>
        <Button onClick={toggleModal} disabled={addGameModal}> Add Game </Button>  
      </Nav>
      <AddGameModal
          isOpen={addGameModal}
          toggle={toggleModal}
        />
    </>
  );
}

export default NavBar;
