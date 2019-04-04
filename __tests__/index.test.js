import {fizzBuzz} from "../index";

test("notFizzBuzz", () => {
  expect(fizzBuzz(1)).toBe(1);
});

test("fizz", () => {
  expect(fizzBuzz(3)).toBe(fizz);
});
