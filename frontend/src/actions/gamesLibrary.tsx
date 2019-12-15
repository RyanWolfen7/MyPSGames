import { 
  ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE
} from '../types'
import { GameInfo } from '../interfaces/AddGameModelInterface'

const addGame = ( game: GameInfo ) => {
  return ({
    types: [ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE],
    payload: {
      request: {
        url: `/addGame`,
        method: 'POST',
        headers: {},
        data: game
      }
    }
  });
}

export default {
  addGame
};
