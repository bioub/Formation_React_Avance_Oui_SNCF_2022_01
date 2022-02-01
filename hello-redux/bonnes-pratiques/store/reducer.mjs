import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, UPDATE_NAME } from "./constants.mjs";

const initialState = {
  count: 0,
  user: {
    name: 'Toto',
  }
};

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + action.payload };
//     case DECREMENT:
//       return { ...state, count: state.count - action.payload };
//     case UPDATE_NAME:
//       return { ...state, user: { ...state.user, name: action.payload } };
//     default:
//       return state;
//   }
// }

export function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}

export function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: countReducer(state.count, action) };
//     case DECREMENT:
//       return { ...state, count: countReducer(state.count, action) };
//     case UPDATE_NAME:
//       return { ...state, user: userReducer(state.user, action) };
//     default:
//       return state;
//   }
// }

export const reducer = combineReducers({
  count: countReducer,
  user: userReducer,
});