import React from 'react';
import { Header, MainModal, Footer, Body, Button } from '../../styles/styledComponents';
import { AddGameModelInterface } from '../../interfaces/AddGameModelInterface';
import AddGameFields from './AddGameFields'

const AddGameModel: React.FC<AddGameModelInterface> = props => {
  const {
    isOpen,
    toggle
  } = props
  
  return (
    <MainModal isOpen={isOpen} toggle={() => toggle()}>
      <Header>
        Add Your Playstation Game Here
      </Header>
      <Body>
        <AddGameFields/>
      </Body>
      <Footer>
          <Button backgroundColor={'white'} color={'black'}> 
            Save
          </Button>
          <Button onClick={toggle}>
            Cancel
          </Button>
      </Footer>
    </MainModal>
  )
}

export default AddGameModel
