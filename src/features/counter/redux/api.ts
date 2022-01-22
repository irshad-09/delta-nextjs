export async function fetchCount(amount = 1): Promise<{ data: number }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10)) {
        resolve({ data: amount + 1 });
      } else {
        reject(new Error('something went wrong'));
      }
    }, 1000);
  });
}
