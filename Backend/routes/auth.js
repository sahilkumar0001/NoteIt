const express = require("express");
const router = express.Router();
const User = require("../modals/User");

router.post("/createuser", async(req, res) => {
  console.log("api hit..");
  try {
    const email=await User.findOne({email:req.body.email})
    if(!email){
      const user = User(req.body);
      user.save();
      res.send(user);
    }
    else{
      res.status(401).send("User already exists!")
    }
  } catch (error) {
    res.status(500).send("Error");
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
    // localStorage.setItem({auth:"yess"});
    res.send(user);
  } catch (error) {
    res.status(400).send("Error");
  }
  console.log("api hit..");
  
});

module.exports = router;
