const jwt = require("jsonwebtoken");
const config = require("./config");

let checkToken = (req, res, next) => {
  console.log(req.headers)
  const token = req.headers.authorization.split(" ")[1]
  console.log(token);
 
  if (token) {
    jwt.verify(token, config.key, (err, decoded) => {
      if (err) {
        return res.json({
          status: false,
          msg: "token is invalid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      status: false,
      msg: "Token is not provided",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};



