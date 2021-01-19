const router = require("express").Router();
const { update } = require("../controllers/userController");
const { validate } = require("../validator/index");
const { body } = require("express-validator");
const { rules: registerationRules } = require("../validator/auth/register");
const { rules: loginRules } = require("../validator/auth/login");
const  {auth} = require('../middleware/auth')
router.post("/update", [auth], update);




module.exports = router;
