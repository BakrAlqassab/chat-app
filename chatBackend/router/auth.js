const router = require("express").Router();
const { login, register } = require("../controllers/authController");
const {validate} =require('../validator/index')
const { body } = require("express-validator");
const{rules:registerationRules} = require('../validator/auth/register')
const{rules:loginRules} = require('../validator/auth/login')
router.post("/login", [loginRules,validate],login);

router.post(
  "/register",
  [registerationRules,
 
     validate
  ],

  register
);

module.exports = router;
