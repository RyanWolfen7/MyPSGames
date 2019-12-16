import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import actions from '../../actions';
import { MainContainer, GameDetailsCard, GameDetailCell } from '../../styles/styledComponents';
import AddGameInterface, { LooseObject } from '../../interfaces/AddGameModelInterface'
import { getReadableDate } from '../../helpers/gameDetails'

interface GamesListInterface extends RouteComponentProps<{ id: string, gameName: string }> { }

const GameDetails: React.FC<GamesListInterface> = props => {
  const { isLoading, game, error} = useSelector((state: { gamesLibrary: AddGameInterface}) => state.gamesLibrary)
  const dispatch = useDispatch()
  const date = getReadableDate(game.releaseDate)

  useEffect(() => {
    dispatch(actions.gamesLibrary.getGame(props.match.params.id))
  }, [])

  const listPlatforms = () => {
    let list = ''
    if (game.platforms && game.platforms.ps1) { list = list + 'ps1 '} 
    if (game.platforms && game.platforms.ps2) { list = list + 'ps2 '} 
    if (game.platforms && game.platforms.ps3) { list = list + 'ps3 '} 
    if (game.platforms && game.platforms.ps4) { list = list + 'ps4 '} 
    if (game.platforms && game.platforms.psp) { list = list + 'psp '} 
    if (game.platforms && game.platforms.psv) { list = list + 'psv '}
    return list  
  }
  console.log(game)

  return (
    <MainContainer>
      <GameDetailsCard>
        <GameDetailCell> Name: </GameDetailCell>
        <GameDetailCell> {props.match.params.gameName} </GameDetailCell>
        <GameDetailCell> Genre: </GameDetailCell>
        <GameDetailCell> {game.genre} </GameDetailCell>
        <GameDetailCell> Number of Players: </GameDetailCell>
        <GameDetailCell> {game.players} </GameDetailCell>
        <GameDetailCell> Release Date: </GameDetailCell>
        <GameDetailCell> {date} </GameDetailCell>
        <GameDetailCell> Publisher: </GameDetailCell>
        <GameDetailCell> {game.publisher} </GameDetailCell>
        <GameDetailCell> Platforms: </GameDetailCell>
        <GameDetailCell> {listPlatforms()} </GameDetailCell>
        <GameDetailCell> Box Art: </GameDetailCell>
        <GameDetailCell> <img src={game.boxArt} /> </GameDetailCell>
      </GameDetailsCard>
    </MainContainer>
  )
}

export default withRouter(GameDetails);
