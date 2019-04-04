export const fizzBuzz = num => {
  if (num % 3) {
    return "fizz";
  } else if (num % 5) {
    return "buzz";
  } else if (num % 15) {
    return "fizzBuzz";
  } else {
    return num;
  }
};
