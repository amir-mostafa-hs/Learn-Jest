const functions = require("./functions");

// for checked correct result
test("test the add function; pass 2 and 2 to this function and result should be must 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// for checked incorrect result
test("test the add function; pass 2 and 2 to this function and result not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// check the result is null
test("test the isNull function; this function all times result equal to null", () => {
  expect(functions.isNull()).toBeNull();
});

// check the result is falsy
test("test the checkValue function; this function all times return the argument value", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
