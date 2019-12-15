import { 
  ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE
} from '../types'
import { GameInfo } from '../interfaces/AddGameModelInterface'

const addGame = ( game: GameInfo ) => {
  return ({
    types: [ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE],
    payload: {
      request: {
        url: `http://localhost:5000`,
        method: 'POST',
        headers: {}
      }
    }
  });
}

export default {
  addGame
};
