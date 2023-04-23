const express = require("express");
const userRouter = express.Router();
const { addUser, getUsers } = require("../controllers/user");

userRouter.post("/", addUser);
userRouter.get("/", getUsers);

module.exports = userRouter;
