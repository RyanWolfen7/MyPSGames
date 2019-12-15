import React, {} from 'react';
import { Col } from 'reactstrap';
import { StyledForm, Group, FieldInput, FieldLabel, Container } from '../../styles/styledComponents'
import { AddGameFieldInterface } from '../../interfaces/AddGameModelInterface'


const AddGameFields: React.FC<AddGameFieldInterface> = props => {
  const {
    platforms,
    updateGameInfo
  } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    updateGameInfo({ [value]: event.target.value} )
  }

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    updateGameInfo({ platforms: { ...platforms,  [value]: event.target.value === 'on' } } )
  }

  return (
    <StyledForm>
      <Group>
        <Container>
          <FieldLabel for="name" >Name</FieldLabel>
          <Col> <FieldInput type="text" name="name" id="name" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onChange(event, 'name')}/> </Col>
        </Container>
        
      <Container>
        <FieldLabel for="genre" >Genre</FieldLabel>
        <Col> <FieldInput type="text" name="genre" id="genre" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onChange(event, 'genre')}/> </Col>
      </Container>

      <Container>
        <FieldLabel for="genre" >Release Date</FieldLabel>
        <Col> <FieldInput type="date" name="releaseDate" id="releaseDate" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onChange(event, 'releaseDate')}/> </Col>
      </Container>
      
      <Container>
        <FieldLabel for="players" >Number of Players</FieldLabel>
        <Col> <FieldInput type="number" name="players" id="players" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onChange(event, 'players')}/> </Col>
      </Container>

      <Container>
        <FieldLabel for="publisher" >Publisher</FieldLabel>
        <Col> <FieldInput type="text" name="publisher" id="publisher" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onChange(event, 'publisher')}/> </Col>
      </Container> 

      <Container>
        <FieldLabel for="boxArt" >Box Art</FieldLabel>
        <Col> <FieldInput type="file" name="file" id="boxArt" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onChange(event, 'boxArt')}/> </Col>
      </Container>     
        
      <Container>      
        <FieldLabel for="platforms" >Platforms</FieldLabel>
        <Col>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onSelect(event, 'ps1')}/>{' '}
              PS1
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps2" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onSelect(event, 'ps2')} />{' '}
              PS2
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps3" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onSelect(event, 'ps3')}/>{' '}
              PS3
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps4" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onSelect(event, 'ps4')} />{' '}
              PS4
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="psp"onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onSelect(event, 'psp')} />{' '}
              PSP
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="psv" onChange={ (event: React.ChangeEvent<HTMLInputElement>, value: String )=> onSelect(event, 'psv')} />{' '}
              PSV
            </FieldLabel>  
          </Col>
        </Container>
      </Group>
    </StyledForm>
  );
}


export default AddGameFields
