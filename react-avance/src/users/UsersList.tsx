import { useEffect } from 'react';
import { User } from './model';

interface Props {
  users: User[];
  loading: boolean;
  onMount(): void;
}

export function UsersList({ users, loading, onMount }: Props) {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return (
    <div className="UsersList">
      {loading && <p>Loading..</p>}
      {users.map((user) => (
        <p key={user.id}>
          <a href="#">
            {user.name}
          </a>
        </p>
      ))}
    </div>
  );
}
