const bcrypt = require("bcrypt");

const hashingPassword = (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(
      `There is some error in hashing your password i.e., ${error}`.bgRed.white
    );
  }
};

const comparePassword = (password, hashedPassword) => {
  const comparison = bcrypt.compareSync(password, hashedPassword);
  return comparison;
};

module.exports = {
  hashingPassword,
  comparePassword,
};
