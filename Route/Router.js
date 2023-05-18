const express = require("express")
const signUp = require("../Controller/Register")
const login = require("../Controller/Signin")

const router = express.Router()

router.route("/signup").post(signUp)
router.route("/login").post(login)

module.exports = router