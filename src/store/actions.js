import constants from '../constants';

export default {
  changeName (NewName) {
    return {
      type: constants.ACTION_CHANGE_NAME,
      payload: NewName
    }
  },
    getInitialState() {
      return {
        type: constants.ACTION_GET_INITIAL_STATE
      }
    }
  
};