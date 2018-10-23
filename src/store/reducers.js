import { ACTION_CHANGE_NAME, ACTION_CHANGE_SECOND_NAME, ACTION_CHANGE_TEL, ACTION_CHANGE_ORG } from '../constants';
import { initialState } from './initialState.js'
  
  
  // const actionChangeName = {
  //   type: ACTION_CHANGE_NAME,
  //   payload: ''
  // };
  
  // const actionChangeSecondName = {
  //   type: ACTION_CHANGE_SECOND_NAME,
  //   payload: ''
  // };
  
  // const actionChangeTel = {
  //   type: ACTION_CHANGE_TEL,
  //   payload: ''
  // };
  
  // const actionChangeOrg = {
  //   type: ACTION_CHANGE_ORG,
  //   payload: ''
  // };
  
  
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_CHANGE_NAME:
        return { ...state, name: action.payload }
      case ACTION_CHANGE_SECOND_NAME:
        return { ...state, secondName: action.payload }
      case ACTION_CHANGE_TEL:
        return { ...state, tel: action.payload }
      case ACTION_CHANGE_ORG:
        return { ...state, org: action.payload }
    }
    return state;
  };
  
