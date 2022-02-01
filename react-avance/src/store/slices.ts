import { createAsyncThunk, createEntityAdapter, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../users/api";
import { User } from "../users/model";
import { State } from "./model";

const initialState: State = {
  count: 0,
  users: {
    items: {
      ids: [],
      entities: {
       
      }
    },
    loading: false,
  }
};

const countSlice = createSlice({
  name:'count',
  initialState: initialState.count,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    } 
  }
});

export const countActions = countSlice.actions;
export const countReducer = countSlice.reducer;


// export function fetchUsersAction() {
//   return async function(dispatch: Dispatch) {
//     dispatch(usersActions.fetchUsersRequested());
//     const users = await fetchUsers();
//     dispatch(usersActions.fetchUsersSuccess(users))
//   }
// }

export const fetchUsersAction = createAsyncThunk('FETCH_USERS', fetchUsers);

export const usersAdapter = createEntityAdapter<User>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (user) => user.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})


const usersSlice = createSlice({
  name:'users',
  initialState: initialState.users,
  reducers: {},
  extraReducers: {
    [fetchUsersAction.pending.type]: (state) => {
      state.loading = true; // Immer
      // return {
      //   ...state,
      //   loading: true,
      // }
    },
    [fetchUsersAction.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.loading = false; // Immer
      //state.items = action.payload; // Immer
      usersAdapter.setAll(state.items, action.payload);
    }
  }
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;