const express = require("express")

const router = express.Router()
const adminApi = require("./admin")

router.use("/admin" , adminApi)

module.exports = router