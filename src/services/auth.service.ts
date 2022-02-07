// Dummy login request that will resolve in 3 seconds
export function* login() {
  const res: Promise<unknown> = yield new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );
  return res;
}
