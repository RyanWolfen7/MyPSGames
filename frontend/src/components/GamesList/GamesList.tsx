import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MainContainer, Title } from '../../styles/styledComponents'
import AddGameInterface, { GameInfo } from '../../interfaces/AddGameModelInterface'
import actions from '../../actions';

const GamesList: React.FC = () => {
  const { isLoading, data, error} = useSelector((state: { gamesLibrary: AddGameInterface}) => state.gamesLibrary)
  const dispatch = useDispatch()
  console.log(isLoading, data, error)

  useEffect(() => {
    dispatch(actions.gamesLibrary.getGameList())
  }, [])

  return (
    <MainContainer>
      <Title> Your PS Games</Title>
    </MainContainer>
  )
}

export default GamesList
