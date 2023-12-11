import type { TUser } from '@/@types';

// -----------------------------------------------------------------------------

export function setUser(user: TUser | null) {
  window.localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(): TUser | null {
  const user = window.localStorage.getItem('user');

  if (user === null) return user;

  return JSON.parse(user) as TUser;
}
