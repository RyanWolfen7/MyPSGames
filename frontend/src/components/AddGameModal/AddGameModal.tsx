import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Header, MainModal, Footer, Body, Button } from '../../styles/styledComponents';
import { AddGameModelInterface, GameInfo, LooseObject } from '../../interfaces/AddGameModelInterface';
import AddGameFields from './AddGameFields'
import actions from '../../actions'

const AddGameModel: React.FC<AddGameModelInterface> = props => {
  const {
    isOpen,
    toggle
  } = props
  const dispatch = useDispatch()
  
  const [ gameInfo, setGameInfo ] = useState<GameInfo>( { 
    name: '', 
    genre: '',
    releaseDate: new Date(),
    players: 0,
    boxArt: new ImageData(1, 1),
    platforms: { ps1: false, ps2: false, ps3: false, ps4: false, psp: false, psv: false}
  })

  useEffect(() => {
    
  },[])

  const updateGameInfo = ( game: Object) => {
    setGameInfo({...gameInfo, ...game})
  }

  const addGameToLibrary = () => {
    dispatch(actions.gamesLibrary.addGame(gameInfo))
    toggle()
  }

  return (
    <MainModal isOpen={isOpen} toggle={() => toggle()}>
      <Header>
        Add Your Playstation Game Here
      </Header>
      <Body>
        <AddGameFields platforms={gameInfo.platforms} updateGameInfo={updateGameInfo}/>
      </Body>
      <Footer>
          <Button onClick={() => addGameToLibrary()} backgroundColor={'white'} color={'black'} height={'2rem'}> 
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
