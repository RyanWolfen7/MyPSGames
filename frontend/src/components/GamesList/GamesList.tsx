import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { FadeWrapper , MainContainer, Title, GamesListContainer, GameCard, PSLogo } from '../../styles/styledComponents'
import { CardTitle, CardImg, CardBody } from 'reactstrap'
import Logo from '../../assets/Header.png';
import { Spinner } from 'reactstrap';
import AddGameInterface, { GamesInLibrary } from '../../interfaces/AddGameModelInterface'
import actions from '../../actions';

interface GamesListInterface extends RouteComponentProps<{ id: string }> { }

const GamesList: React.FC<GamesListInterface> = props => {
  const { isLoading, data, error} = useSelector((state: { gamesLibrary: AddGameInterface}) => state.gamesLibrary)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.gamesLibrary.getGameList())
  }, [])

  console.log(data.map(x => x))
  const displayGames = () => {
    return data.map( (game: GamesInLibrary) => 
    <GameCard onClick={() => props.history.push(`/game/${game._id}`)}>
      <CardBody>
        <CardTitle> {game.name} </CardTitle>
        <CardImg src={Logo} width="100%" alt={game.name}/>
      </CardBody>
    </GameCard>)
  }

  return (
    <MainContainer>
      {isLoading && <Spinner width={6} height={6} type="grow" color="warning" />}
      {!isLoading && <FadeWrapper>
      <Title> Your PS Games</Title>
      <GamesListContainer>
        {displayGames()}
      </GamesListContainer>
      </FadeWrapper>}
    </MainContainer>
  )
}

export default withRouter(GamesList);
