const Response = require("../services/response");
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const { failed } = new Response(res);
  const ip = "0.0.0.0";
  const authToken = req.headers["authorization"];
  const token = authToken && authToken.split(" ")[1];

  if (!token) return failed("No token provided", "No token provided", 401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err || "0.0.0.0" !== ip)
      return failed("Invalid token", "Invalid token", 403);
    req.data = data;
    next();
  });
};

module.exports = { authenticateToken };
