import { LoginBody } from '@/types/auth';

// Dummy login request that will resolve in 2 seconds
export function* login(body: LoginBody) {
  const res: Promise<boolean> = yield new Promise((resolve, reject) => {
    if (body.username !== 'user' || body.password !== 'user') {
      reject('Invalid username or password');
    }

    setTimeout(() => resolve(true), 2000);
  });
  return res;
}
