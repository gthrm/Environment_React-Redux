import constants from '../constants';
import { initialState } from './initialState.js'
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.ACTION_CHANGE_NAME:
        return { ...state, name: action.payload }

      case constants.ACTION_GET_INITIAL_STATE:
        return initialState
    } 
    return state;
  };
  
