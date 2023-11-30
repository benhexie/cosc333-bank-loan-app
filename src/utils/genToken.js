const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const generateAccessToken = (_, { id, user }) => {
  return jwt.sign({ id, user }, ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = { generateAccessToken };
