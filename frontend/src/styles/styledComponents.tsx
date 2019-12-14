import { 
  Navbar,
  NavbarBrand, 
  Modal, 
  ModalHeader,
  ModalFooter,
  ModalBody
} from 'reactstrap';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #003791;
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
  height: 3rem;
  width: 8rem;
  margin: 1.5rem;
  font-family: Georgia, serif;
  font-weight: bold;
  font-size: 1rem;
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
