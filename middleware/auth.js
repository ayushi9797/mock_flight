const jwt = require("jsonwebtoken");
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, "flight");
    console.log(decoded);
    if (decoded) {
      req.body.userId = decoded.user_id; // creating relationship with user
      next();
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  authenticate,
};
