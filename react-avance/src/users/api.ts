import { User } from "./model";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}

export async function fetchUsersById(id: number): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  return data;
}