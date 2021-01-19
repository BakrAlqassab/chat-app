const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/app");
const { validationResult } = require("express-validator");
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // to generate the App Key for once
    const secret = require("crypto").randomBytes(64).toString("hex");
    // find the user
    const user = await User.findOne({
      where: {
        email,
      },
    });

    //check if user found
    if (!user) return res.status(404).json({ message: "user not found!" });
    //check if password matches
    if (!bcrypt.compareSync(password, user.password))
      return res
        .status(404)
        .json({ message: "password not match, incorrect password!" });
    //generate auth token
    const userWithToken = generateToken(user.get({ raw: true }));
    //  console.log(user)
    userWithToken.user.avatar = user.avatar;
    return res.send(userWithToken);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  return res.send([email, password]);
};

exports.register = async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
  try {
    const user = await User.create(req.body);

    const userWithToken = generateToken(user.get({ raw: true }));
   
    return res.send(userWithToken);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const generateToken = (user) => {
  // To delete the password from the return authentication user information
  delete user.password;

  const token = jwt.sign(user, config.appkey, { expiresIn: 86400 });
  return { ...{user}, ...{ token } };
};
