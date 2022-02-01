import { State } from "./model";

export function countSelector(state: State) {
  return state.count;
}

export function usersSelector(state: State) {
  return state.users;
}

// si besoin de memo ici
