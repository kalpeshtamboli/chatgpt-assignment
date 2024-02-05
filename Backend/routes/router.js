const express = require("express")
const  {chatController} = require("../controller/controller")
const router = express.Router()

router.route("/chatController").post(chatController)
// router.route("/login").post(loginUser)



module.exports = router