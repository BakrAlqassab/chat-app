const router = require('express').Router();
const auth = require('./auth')

router.get("/home", (req, res) => {
  return res.send("Home Screen");
});

router.use('/', require('./auth'))




module.exports = router