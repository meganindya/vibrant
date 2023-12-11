import type { TUser } from '@/@types';

import { setUser } from '@/utils/user';

export async function login(options: { username: string; password: string }) {
  const { username, password } = options;

  let data: TUser;
  let error: string;

  if (!(username === 'meganindya' && password === 'password')) {
    error = 'Forbidden';
  } else {
    const user: TUser = {
      uname: 'meganindya',
      fname: 'Anindya',
      mname: '',
      lname: 'Kundu',
      role: 'ADMIN',
    };

    setUser(user);

    data = user;
  }

  return new Promise((resolve) => {
    resolve({
      data,
      error,
    });
  });
}
