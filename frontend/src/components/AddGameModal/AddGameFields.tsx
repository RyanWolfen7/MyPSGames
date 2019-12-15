import React from 'react';
import { Col } from 'reactstrap';
import { StyledForm, Group, FieldInput, FieldLabel, Container } from '../../styles/styledComponents'


const AddGameFields: React.FC = props => {

  return (
    <StyledForm>
      <Group>
        <Container>
          <FieldLabel for="name" >Name</FieldLabel>
          <Col> <FieldInput type="text" name="name" id="name" /> </Col>
        </Container>
        
      <Container>
        <FieldLabel for="genre" >Genre</FieldLabel>
        <Col> <FieldInput type="text" name="genre" id="genre"/> </Col>
      </Container>

      <Container>
        <FieldLabel for="genre" >Release Date</FieldLabel>
        <Col> <FieldInput type="date" name="releaseDate" id="releaseDate"/> </Col>
      </Container>
      
      <Container>
        <FieldLabel for="players" >Number of Players</FieldLabel>
        <Col> <FieldInput type="number" name="players" id="players"/> </Col>
      </Container>

      <Container>
        <FieldLabel for="publisher" >Publisher</FieldLabel>
        <Col> <FieldInput type="text" name="publisher" id="publisher"/> </Col>
      </Container> 

      <Container>
        <FieldLabel for="boxArt" >Box Art</FieldLabel>
        <Col> <FieldInput type="file" name="file" id="boxArt" /> </Col>
      </Container>     
        
      <Container>      
        <FieldLabel for="platforms" >Platforms</FieldLabel>
        <Col>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" />{' '}
              PS1
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" />{' '}
              PS2
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" />{' '}
              PS3
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" />{' '}
              PS4
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" />{' '}
              PSP
            </FieldLabel>
            <FieldLabel thin check>
              <FieldInput thin type="checkbox" id="ps1" />{' '}
              PSV
            </FieldLabel>  
          </Col>
        </Container>
      </Group>
    </StyledForm>
  );
}


export default AddGameFields
