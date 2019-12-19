const args = process.argv.slice(2);

const [name] = args;

if (name === undefined) {

  console.error('Please pass a name ex. node hello.js Bob');

  process.exit(0);
}

console.log(`Good day to you, ${name}.`);