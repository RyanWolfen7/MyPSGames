import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { GameTitle, CardImage, CardWrapper , FadeWrapper , MainContainer, Title, GamesListContainer, GameCard, PSLogo } from '../../styles/styledComponents'
import Logo from '../../assets/Header.png';
import { Spinner } from 'reactstrap';
import AddGameInterface, { GamesInLibrary } from '../../interfaces/AddGameModelInterface'
import actions from '../../actions';

interface GamesListInterface extends RouteComponentProps<{ id: string }> { }

const GamesList: React.FC<GamesListInterface> = props => {
  const { isLoading, gamesList, error} = useSelector((state: { gamesLibrary: AddGameInterface}) => state.gamesLibrary)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.gamesLibrary.getGameList())
  }, [])

  const displayGames = () => {
    return gamesList.map( (game: GamesInLibrary) => 
    <GameCard onClick={() => props.history.push(`/${game.name}/${game._id}`)}>
      <CardWrapper>
        <GameTitle> {game.name} </GameTitle>
        <CardImage src={game.boxArt} width="100%" alt={game.name}/>
      </CardWrapper>
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
