import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../store/selectors";
import { fetchUsersAction, usersAdapter } from "../store/slices";
import { UsersList } from "./UsersList";

export function UsersListContainer() {
  const dispatch = useDispatch();
  const usersState = useSelector(usersSelector)
  const users =  usersAdapter.getSelectors().selectAll(usersState.items);

  const handleMount = useCallback(async () => {
    dispatch(fetchUsersAction())
  }, [dispatch]);

  return (
    <UsersList users={users} loading={usersState.loading} onMount={handleMount} />
  );
}
