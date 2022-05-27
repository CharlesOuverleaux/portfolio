export const fetcher = async <T>(input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);

  if (!res.ok) {
    throw res;
  }

  return res.json() as Promise<T>;
};
