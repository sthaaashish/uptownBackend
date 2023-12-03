const jwt = require("jsonwebtoken");

module.exports.userCheck = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decode = jwt.decode(token, "jsonToken");

      if (decode) {
        req.userId = decode.id;
        return next();
      } else {
        return res.status(401).json({
          status: "error",
          message: `not authorised`,
        });
      }
    } else {
      return res.status(401).json({
        status: "error",
        message: `not authorised`,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `THis is middleware`,
    });
  }
};


