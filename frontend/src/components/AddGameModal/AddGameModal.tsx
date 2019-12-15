import React, { useState } from 'react';
import { Header, MainModal, Footer, Body, Button } from '../../styles/styledComponents';
import { AddGameModelInterface, GameInfo } from '../../interfaces/AddGameModelInterface';
import AddGameFields from './AddGameFields'

const AddGameModel: React.FC<AddGameModelInterface> = props => {
  const {
    isOpen,
    toggle
  } = props
  
  const [ gameInfo, setGameInfo ] = useState<GameInfo>( { 
    name: '', 
    genre: '',
    releaseDate: new Date(),
    players: 0,
    boxArt: null,
    platforms: { ps1: false, ps2: false, ps3: false, ps4: false, psp: false, psv: false}
  })

  const updateGameInfo = ( game: Object) => {
    setGameInfo({...gameInfo, ...game})
  }

  console.log(gameInfo)
  return (
    <MainModal isOpen={isOpen} toggle={() => toggle()}>
      <Header>
        Add Your Playstation Game Here
      </Header>
      <Body>
        <AddGameFields platforms={gameInfo.platforms} updateGameInfo={updateGameInfo}/>
      </Body>
      <Footer>
          <Button backgroundColor={'white'} color={'black'} height={'2rem'}> 
            Save
          </Button>
          <Button onClick={toggle} height={'2rem'}>
            Cancel
          </Button>
      </Footer>
    </MainModal>
  )
}

export default AddGameModel
