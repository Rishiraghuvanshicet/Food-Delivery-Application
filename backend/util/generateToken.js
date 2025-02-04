const jwt = require("jsonwebtoken");
const dotenv= require("dotenv");
dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, userName: user.userName },
    process.env.ACCESS_TOKEN, 
    { expiresIn: '1h' } 
  );
};

module.exports = generateToken;
