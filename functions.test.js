const functions = require("./functions");

test("test the add function; pass 2 and 2 to this function and result should be must 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
