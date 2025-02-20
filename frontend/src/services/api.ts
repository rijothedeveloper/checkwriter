export function getAllCompanies(): Promise<
  { id: number; name: string; owned: boolean }[]
> {
  const myPromise = new Promise<{ id: number; name: string; owned: boolean }[]>(
    (resolve, reject) => {
      resolve([
        { id: 1, name: "orangesoft", owned: true },
        { id: 2, name: "orangesoft2", owned: true },
        { id: 3, name: "orangesoft3", owned: false },
      ]);
    }
  );
  return myPromise;
}
