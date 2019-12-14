import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const AddGameFields: React.FC = props => {

  return (
    <Form>
        <Label for="name" >Name</Label>
        <Col sm={10}>
          <Input type="text" name="name" id="name" />
        </Col>
        <Label for="genre" >Genre</Label>
        <Col sm={10}>
          <Input type="text" name="genre" id="genre"/>
        </Col>
      
        <Label for="genre" >Release Date</Label>
        <Col sm={10}>
          <Input type="date" name="releaseDate" id="releaseDate"/>
        </Col>
      
        <Label for="players" >Number of Players</Label>
        <Col sm={10}>
          <Input type="number" name="players" id="players"/>
        </Col>
      
        <Label for="publisher" >Publisher</Label>
        <Col sm={10}>
          <Input type="text" name="publisher" id="publisher"/>
        </Col>
      
        <Label for="boxArt" >Box Art</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="boxArt" />
        </Col>
      
        <Label for="platforms" >Platforms</Label>
        <Col>
            <Label check>
              <Input type="checkbox" id="ps1" />{' '}
              PS1
            </Label>
            <Label check>
              <Input type="checkbox" id="ps1" />{' '}
              PS2
            </Label>
            <Label check>
              <Input type="checkbox" id="ps1" />{' '}
              PS3
            </Label>
            <Label check>
              <Input type="checkbox" id="ps1" />{' '}
              PS4
            </Label>
            <Label check>
              <Input type="checkbox" id="ps1" />{' '}
              PSP
            </Label>
            <Label check>
              <Input type="checkbox" id="ps1" />{' '}
              PSV
            </Label>
          
        </Col>
        <Col>
          <Button>Submit</Button>
        </Col>
      
    </Form>
  );
}


export default AddGameFields
