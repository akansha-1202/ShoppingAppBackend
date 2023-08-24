const { hashingPassword, comparePassword } = require("../Helpers/hashing");
const userModel = require("../Schema/userModel");
const JWT = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;

    //check user
    const existingUser = await userModel.findOne({ email: email });

    //existing user
    if (existingUser) {
      return res.send({
        success: true,
        message: "User's email ID is already in use...!!!",
        user: existingUser,
      });
    }

    //register user
    const hashedPassword = hashingPassword(password);

    //save
    const tempObj = new userModel({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      password: hashedPassword,
    });

    const user = await tempObj.save();
    const token = JWT.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    // console.log(user);
    return res.send({
      success: true,
      message: "User Register Successfully",
      user: user,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check user
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User is not registered",
      });
    }

    const match = comparePassword(password, user.password);
    const token = JWT.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    if (match) {
      return res.send({
        success: true,
        message: "User Logged in Successfully",
        user: user,
        token: token,
      });
    }
    //token

    return res.status(200).send({
      success: false,
      message: "Invalid Password",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};
module.exports = {
  register,
  login,
};
