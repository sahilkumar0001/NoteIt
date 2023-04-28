const express = require("express");
const router = express.Router();
const User = require("../modals/User");

router.post("/createuser", (req, res) => {
  console.log("api hit..");
  try {
    const user = User(req.body);
    user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send("Error");
  }
});

router.post("/login", async(req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  let user = await User.findOne({email:email,password:password});
  console.log(user);
  try {
    if (!user) {
      return res.status(401).send("Enter valid credentials!");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send("Error");
  }
  console.log("api hit..");
});

module.exports = router;
