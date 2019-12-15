import { 
  ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE, 
  GET_GAME_LIST, GET_GAME_LIST_SUCCESS, GET_GAME_LIST_FAILURE,
  GET_GAME, GET_GAME_SUCCESS, GET_GAME_FAILURE
} from '../types'
import { AnyAction } from 'redux';
import AddGameInterface, { GamesInLibrary } from '../interfaces/AddGameModelInterface'

const initialState: AddGameInterface = {
  isLoading: false,
  data: [] as GamesInLibrary[],
  error: null
}

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        isLoading: true,
      }
    case ADD_GAME_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      }
    case ADD_GAME_FAILURE:
      return {
        ...state,
        error: action.error.response.data,
        isLoading: false,
      }
    case GET_GAME_LIST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_GAME_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      }
    case GET_GAME_LIST_FAILURE:
      return {
        ...state,
        error: action.error.response.data,
        isLoading: false,
      }
    case GET_GAME:
      return {
        ...state,
        isLoading: true,
      }
    case GET_GAME_SUCCESS:
        console.log('thunk', action.payload.data)
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      }
    case GET_GAME_FAILURE:
      return {
        ...state,
        error: action.error.response.data,
        isLoading: false,
      }
    default:
      return state 
  }
}
