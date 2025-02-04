const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const generateToken = require("../util/generateToken");


// User Registration
const userRegister = async (req, res) => {
  const { email ,role, userName, password , file } = req.body;
  try {
    if (!email || !role || !userName || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
    const findUser = await User.findOne({ userName });
    if (findUser) {
      return res.status(409).json({ message: "user already register with this name" });
    }
   
    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      role,
      userName,
      password: hashedPassword,
      file
    });
    await user.save();
    return res.status(200).json({message:"user Register Successfully"});
  } catch (error) {
    return res.status(500).json({message:`server error ${error}` });
  }
};

// User Login
const userLogin = async (req, res) => {
  const { userName, password , role} = req.body;
  try {
    if (!userName || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
      }
    const found = await User.findOne({ userName });
    if (!found) {
      return res.status(404).json({ message: "user not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, found.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if(role !== found.role){
        return res.status(404),json({message:'Role is not matching'})
    }
    
    const accessToken = generateToken(found);

    return res.status(200).json({
      status: "success",
      message: "logged in succesfully",
      data: {
        id: found._id,
        username: found.userName, 
        role:found.role,
        accessToken: accessToken,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `error in getting user deatail and ${error}` });
  }
};

module.exports = { userRegister, userLogin };
