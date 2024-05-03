const express = require("express");

const jwt = require("jsonwebtoken")
const Admin = require("../db/db")
const zod = require("zod");
const JWT_secret_key = require("../config");
const router = express.Router();

const signupBody = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(6),
  userName: zod.string().email(),
});

router.post("/signup", async (req, res) => {
  const success = signupBody.safeParse(req.body);

  if (!success) {
    return res.status(403).json({
      msg: " Inputs are not valid ",
    });
  }

  const admin = await Admin.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    userName: req.body.userName,
  });
  if(!admin){
    return res.send("not created")
  }

  const adminId = admin._id;

  res.json({
    msg: adminId,
  });
});

const signinBody = zod.object({
  password: zod.string().min(6),
  userName: zod.string().email(),
});

router.post("/signin", async (req, res) => {
  const success = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(403).json({
      msg: "inputs are not valid ",
    });
  }
  const password = req.body.password
  const userName = req.body.userName

  const admin = Admin.findOne({
    password: password,
    userName: userName,
  });
  console.log("--------------------------here my admin details",admin);
  if (!admin) {
    return res.status(403).json({
      msg: " user not found in our db ",
    });
  }
 
  res.json({
    msg : "success",
  })
//  // const adminId = Admin._id

//   const token = jwt.sign( 
//     password , JWT_secret_key
//   )

//   res.json({
//     token : token ,
//   });
});

module.exports = router;
