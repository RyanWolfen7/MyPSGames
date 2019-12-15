import { 
  ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE
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
  });
}

export default {
  addGame
};
