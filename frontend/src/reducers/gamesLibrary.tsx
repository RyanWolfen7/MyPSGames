import { 
  ADD_GAME, ADD_GAME_SUCCESS, ADD_GAME_FAILURE
} from '../types'
import { AnyAction } from 'redux';
import AddGameInterface, { DataResponse } from '../interfaces/AddGameModelInterface'

const initialState: AddGameInterface = {
  isLoading: false,
  data: {} as DataResponse,
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
    default:
      return state
  }
}
