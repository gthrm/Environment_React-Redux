import { ACTION_CHANGE_NAME, ACTION_CHANGE_SECOND_NAME, ACTION_CHANGE_TEL, ACTION_CHANGE_ORG, ACTION_CHANGE_EMAIL, ACTION_GET_INITIAL_STATE } from '../constants';

export const changeName = (NewName) => {
  return {
    type: ACTION_CHANGE_NAME,
    payload: NewName
  }
};
  
export const changeSecondName = (NewSecondName) => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: NewSecondName
  }
};
  
export const changeTel = (NewTel) => {
  return {
    type: ACTION_CHANGE_TEL,
    payload: NewTel
  }
};
  
export const changeOrg = (NewOrg) => {
  return {
    type: ACTION_CHANGE_ORG,
    payload: NewOrg
  }
};

export const changeEmail = (NewEmail) => {
  return {
    type: ACTION_CHANGE_EMAIL,
    payload: NewEmail
  }
};

export const getInitialState = () => {
  return {
    type: ACTION_GET_INITIAL_STATE
  }
};