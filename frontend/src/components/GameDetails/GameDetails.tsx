import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import actions from '../../actions';
import { MainContainer, GameDetailsCard, GameDetailCell } from '../../styles/styledComponents';
import AddGameInterface from '../../interfaces/AddGameModelInterface'

interface GamesListInterface extends RouteComponentProps<{ id: string, gameName: string }> { }

const GameDetails: React.FC<GamesListInterface> = props => {
  const { isLoading, data, error} = useSelector((state: { gamesLibrary: AddGameInterface}) => state.gamesLibrary)
  const dispatch = useDispatch()
  console.log(props.match.params)

  useEffect(() => {
    dispatch(actions.gamesLibrary.getGame(props.match.params.id))
  }, [])

  return (
    <MainContainer>
      <GameDetailsCard>
        <GameDetailCell> Name: </GameDetailCell>
        <GameDetailCell> {props.match.params.gameName} </GameDetailCell>
      </GameDetailsCard>
    </MainContainer>
  )
}

export default withRouter(GameDetails);
