import { UsersState } from './model';
import { countReducer, usersReducer } from './slices';

test('countReducer', () => {
  const state = 0;
  const action = { type: 'count/increment', payload: 1 };
  const nextState = countReducer(state, action);

  expect(nextState).toBe(1);
});

test('usersReducer', () => {
  const state: UsersState = { loading: false, items: { ids: [], entities: {} } };
  const action = { type: 'FETCH_USERS/pending' };
  const nextState = usersReducer(state, action);

  expect(nextState).toEqual({ loading: true, items: { ids: [], entities: {} } });
  expect(nextState).not.toBe(state);
});
