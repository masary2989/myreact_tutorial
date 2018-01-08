import { SET_UID } from '../actions/user';

const initialState = {
  UID: 'Please enter your UID...',
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case SET_UID:
      return Object.assign({}, { UID: action.UID });
    default:
      return state;
  }
}

