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

// check the result is not falsy value
test("test the checkValue function; this function all times return the argument value", () => {
  expect(functions.checkValue("not falsy value")).not.toBeFalsy();
});

// check the success create user
test("test the createUser function; pass 2 argument to this function and result should be must object of first name and last name", () => {
  const firstName = "Amir Mostafa";
  const lastName = "Haji Sadeghian";
  expect(functions.createUser(firstName, lastName)).not.toBeFalsy();
  expect(functions.createUser(firstName, lastName)).toEqual({
    firstName,
    lastName,
  });
});

// check less than and greater than
test("check the average is less than 20", () => {
  expect(functions.checkTheAverage(10, 15, 18, 14, 20)).toBeLessThan(20);
});

test("check the number is less then or equal 2022", () => {
  const num1 = 1200;
  const num2 = 822;
  expect(num1 + num2).toBeLessThanOrEqual(2022);
});

test("check the age is greater than 18", () => {
  const age = 18;
  expect(age).toBeGreaterThanOrEqual(18);
});

// Regex
test("There is no space , ! , # , & , @ , ? , $ , % in password", () => {
  expect("TestPass**++").not.toMatch(/[\s@#$!%?&]/);
});

test("is gmail?", () => {
  expect("amir.mostafa@gmail.com").toMatch(/(\W|^)[\w.+\-]*@gmail\.com(\W|$)/);
});

// test arrays item
test("is array have undefined?", () => {
  expect(["string", 1221, null, undefined]).toContain(undefined);
});
