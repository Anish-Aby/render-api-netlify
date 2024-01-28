const express = require("express");
const userController = require(`${__dirname}/../controllers/userController`);

const router = express.Router();

router.route("/:userId").get(userController.getUser);

module.exports = router;
