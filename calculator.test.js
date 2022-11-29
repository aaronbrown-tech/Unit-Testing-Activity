const calculator = require("./calculator");

test('Takes two numbers and return sum', () => {
    expect(calculator.calculatorSum(1,1)).toBe(2);
  });

test('Takes two numbers and return subtract', () => {
    expect(calculator.calculatorSubtract(1,1)).toBe(0);
});

test('Takes two numbers and return multiply', () => {
    expect(calculator.calculatorMultiply(1,1)).toBe(1);
});

test('Takes two numbers and return divide', () => {
    expect(calculator.calculatorDivide(10,2)).toBe(5);
});