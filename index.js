function createGreeting(name = 'World') {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(createGreeting());
}

module.exports = { createGreeting };
