const User = require("../models").User;
const bcrypt = require("bcrypt");
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find the user
    const user = await User.findOne({
      where: {
        email,
      },
    });

    //check if user found
    if (!user) return res.status(404).json({ message: "user not found!" });
    //check if password matches
if(!bcrypt.compareSync(password,user.password))  return res.status(404).json({ message: "password not match, incorrect password!" });
    //generate auth token

    return res.send(user);
  } catch (error) {}

  return res.send([email, password]);
};

exports.register = async (req, res) => {};
