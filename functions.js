const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: (firstName, lastName) =>
    Object({
      firstName,
      lastName,
    }),
  checkTheAverage: (...numbers) => {
    const sum = numbers.reduce((pre, cur) => {
      return pre + cur;
    });
    return sum / numbers.length;
  },
};

module.exports = functions;
