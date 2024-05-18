export const getData = async <T>(URL: string): Promise<T> => {
  return await (
    await fetch(URL, {
      method: "GET",
    })
  ).json();
};

// TODO: implement other HTTP methods when needed
