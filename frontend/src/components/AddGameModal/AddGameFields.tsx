import React, {} from 'react';
import { Col} from 'reactstrap';
import { StyledForm, Group, FieldInput, FieldLabel, Container } from '../../styles/styledComponents'
import { AddGameFieldInterface, AddGameInputSchemaInterface, Schema } from '../../interfaces/AddGameModelInterface'
import { FieldSchema, PlatformSchema } from './AddGameInputSchema'


const AddGameFields: React.FC<AddGameFieldInterface> = props => {
  const {
    platforms,
    updateGameInfo
  } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateGameInfo({ [event.target.id]: event.target.value} )
  }

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateGameInfo({ platforms: { ...platforms,  [event.target.id]: event.target.value === 'on' } } )
  }

  const createMainFields = (inputSchema: AddGameInputSchemaInterface) => {
    return inputSchema.schema.map( (fields: Schema) => {
      const { name, field, type } = fields
      if (type !== 'checkbox') {
        return (
        <Container>
          <FieldLabel for={field} >{name}</FieldLabel>
          <Col> <FieldInput type={type} name={field} id={field} onChange={ (event: React.ChangeEvent<HTMLInputElement>, name: string)=> onChange(event)}/> </Col>
        </Container> )
        
      } else {
        return (
        <FieldLabel thin check>
          <FieldInput thin type="checkbox" id={field} name={field} onChange={ (event: React.ChangeEvent<HTMLInputElement>, id: string )=> onSelect(event)}/>{' '}
          {name}
        </FieldLabel>)
      }
    })
  }

  return (
    <StyledForm>
      <Group>
        {createMainFields(FieldSchema)}    
        <Container>      
          <FieldLabel for="platforms" >Platforms</FieldLabel>
          <Col>
            {createMainFields(PlatformSchema)}  
          </Col>
        </Container>
      </Group>
    </StyledForm>
  );
}


export default AddGameFields
