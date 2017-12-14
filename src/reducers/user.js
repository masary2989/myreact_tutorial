import {SET_UID} from '../actions/user';

const initialState = {
  UID: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_UID:
    // alert(store.getState())
      return Object.assign({}, { UID: action.UID });
    default:
      return state;
  }
}

