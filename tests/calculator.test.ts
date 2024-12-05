import { Calculator } from "../src/calculator";

test("adds two numbers", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("divides two numbers", () => {
  expect(Calculator.divide(6, 3)).toBe(2);
});

test("throws error when dividing by zero", () => {
  expect(() => Calculator.divide(1, 0)).toThrow("Cannot divide by zero");
});
