import { 
  ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE,
  GET_GAME_LIST, GET_GAME_LIST_SUCCESS, GET_GAME_LIST_FAILURE
} from '../types'
import { GameInfo } from '../interfaces/AddGameModelInterface'

const addGame = ( game: Object ) => {
  console.log((game))
  return ({
    types: [ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE],
    payload: {
      request: {
        url: `/addGame`,
        method: 'POST',
        data: game
      }
    }
  })
}

const getGameList = () => {
  return ({
    types: [GET_GAME_LIST, GET_GAME_LIST_SUCCESS, GET_GAME_LIST_FAILURE],
    payload: {
      request: {
        url: `/gamesList`,
        method: 'GET',
      }
    }
  })
}

export default {
  addGame,
  getGameList
};
