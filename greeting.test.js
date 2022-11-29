const Greet = require('./greeting.js');

test('Takes Aaron and returns Hello, there!', () => {
  expect(Greet()).toBe("Hello, there!");
});

test('Takes Aaron and returns Hello, Aaron', () => {
    expect(Greet("Aaron")).toBe("Hello, Aaron");
});

test('Takes AARON and returns HELLO, AARON', () => {
  expect(Greet("AARON")).toBe("HELLO, AARON");
});

test('Takes an array of names ["Aaron", "Ana", "Emmett"] and returns Hello, Aaron, Ana, Emmett', () => {
  expect(Greet(["Aaron", "Ana", "Emmett"])).toBe("Hello, Aaron, Ana, Emmett");
});