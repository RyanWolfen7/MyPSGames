import { 
  Navbar,
  NavbarBrand, 
  Modal, 
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Fade,
  Card,
  CardImg,
  CardBody
} from 'reactstrap';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #003791;
  height: 100vh;
  width: 100vw;
`;

export const Sony = styled.a`
  color: white;
  padding: .5rem;
  font-family: Georgia, serif;
  font-weight: bold;
`

export const Button: any = styled.button`
  align-self: center;
  color: ${ (props: any) => props.color ? props.color : 'white'};
  background: ${ (props: any) => props.backgroundColor ? props.backGroundColor : 'black'};
  height: ${ (props: any) => props.height ? props.height : '3rem'};
  width: 8rem;
  margin: 1.5rem;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 1rem;
  border-radius: .3rem
`

export const Brand = styled(NavbarBrand)`
  display: flex;
  text-decoration: none;
`

export const PSLogo = styled.img`
  height: 3.5rem;
  padding: 1rem;
  align-self: center;
`

export const Nav = styled(Navbar)`
  background: ${ props => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
  height: ${props => props.height ? props.height : '5rem'};
  flex-direction: row;
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
`;

export const MainModal = styled(Modal)`
  height: 100%;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
`

export const Header = styled(ModalHeader)`
  color: white;
  display: flex;
  justify-content: center;
`

export const Footer = styled(ModalFooter)`
  display: flex;
  justify-content: center;
`

export const Body = styled(ModalBody)`
  display: flex;
  justify-content: center;
  background: white;
  width: 100vw;
`
export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Group = styled(FormGroup)`
  margin: 2.3rem;
  padding: 2.3rem;
  background: black;
  color: white;
  border-radius: .3rem
`

export const FieldInput = styled(Input)`
  width: ${ ( props: any ) => props.thin ? '' : '100%'};
`
export const FieldLabel = styled(Label)`
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 1rem; 
  margin: ${ (props: any) => props.thin ? '.5rem' : '.8rem 0 .8rem'}
`

export const Container = styled.div`
  padding: 1rem 0 1rem;
`
export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.div`
padding: 1rem;
  font-size: 45px;
  color: #fff;
  font-weight: 300;
  display: flex;
  justify-content: center;
`;

export const FadeWrapper = styled(Fade)`
  height: 100%;
  color: white;
`

export const GamesListContainer = styled.div`
  padding: 0rem;
  margin: 0rem;
  display: grid;
  grid-template-columns: repeat(4, [col] auto) ;
  grid-template-rows: repeat(auto, [row] auto  ); 
  grid-gap: .1rem; 
  width: auto;
`

export const GameCard = styled(Card)`
  background: white;
  color: black;
  padding: 1.4rem;
  border-radius: .3rem
  margin: 3rem;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const GameDetailsCard = styled(Card)`
  background: black;
  padding: 1.4rem;
  margin: 3rem 15rem 0;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: .3rem
  display: grid;
  grid-template-columns: repeat(2, [col] 20rem) ;
  grid-template-rows: repeat(2, [row] auto  ); 
  grid-gap: .1rem; 
` 

export const GameDetailCell = styled.div`
  background: white;
  color: black;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 1.5rem;
  border: solid black .1rem;
  border-radius: .3rem
  padding: .7rem;
  margin: .1rem;
`
export const CardImage = styled(CardImg)`
  height: 90%;
  width: 100%;
  border-radius: .3rem
`

export const CardWrapper = styled(CardBody)`
  height: 15rem;
  width: 10rem;
  justify-self: center;
  border-radius: .3rem
`
export const GameTitle = styled(Title)`
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: .8rem;
  margin: 0;
  padding: 0 0 10px;;
  color: black;
`
