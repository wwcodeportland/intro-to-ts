// Add our own timeout
function timeout(n: number) {
  return new Promise(res => setTimeout(res, n));
}

// Greeting function, takes two strings and a number
export async function add(greeting: string, a: number, animal: string) {
  await timeout(500);
  return greeting + a + animal;
}

// Output
(async () => {
  console.log(await add('Joan counted ', 3, ' penguins.'));
})();
