import { User } from "../users/model";

export type CountState = number;
export interface UsersState {
  items: {
    ids: number[],
    entities: {
      [id: number]: User
    }
  };
  loading: boolean;
}

export interface State {
  count: CountState,
  users: UsersState,
}

