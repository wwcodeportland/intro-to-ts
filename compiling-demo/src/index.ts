function timeout(n: number) {
  return new Promise(res => setTimeout(res, n));
}

export async function add(greeting: string, a: number, animal: string) {
  await timeout(500);
  return greeting + a + animal;
}

(async () => {
  console.log(await add('Joan counted ', 3, ' penguins.'));
})();
