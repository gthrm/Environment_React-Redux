import _ from 'lodash';
import { createStore } from 'redux';

const initialState = {
    name: 'ololo',
    secondName: 'lolka'
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ... state,  name: action.payload };
        case 'CHANGE_SECOND_NAME':
            return { ... state,  secondName: action.payload };
        default:
            break;
    }
    return state;
};

const store = createStore(reducer);

console.log(store.getState());


const changeName = {
    type: 'CHANGE_NAME',
    payload: 'Хер'
};

const changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Херов'
};

store.dispatch(changeName);

console.log(store.getState());

store.dispatch(changeSecondName);

console.log(store.getState());