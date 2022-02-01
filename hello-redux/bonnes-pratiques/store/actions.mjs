import { DECREMENT, INCREMENT, UPDATE_NAME } from './constants.mjs';

// export function increment(payload = 1) {
//   return {
//     type: INCREMENT,
//     payload
//   }
// }

// export function decrement(payload = 1) {
//   return {
//     type: DECREMENT,
//     payload,
//   }
// }

// FSA : Flux Standard Action
// https://github.com/redux-utilities/flux-standard-action
// { type, payload, error, meta }

// Redux-actions
function createAction(type, payloadCreator) {
  return function (payload) {
    let payloadObj = { payload };

    if (payloadCreator && typeof payloadCreator === 'function') {
      payloadObj = payloadCreator(payload);
    }

    return { type, ...payloadObj };
  };
}

export const increment = createAction(INCREMENT, (payload = 1) => ({ payload }));
export const decrement = createAction(DECREMENT, (payload = 1) => ({ payload }));
export const updateName = createAction(UPDATE_NAME);
