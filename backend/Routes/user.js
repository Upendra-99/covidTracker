const express = require('express')
const app = express();
const cors = require('cors')
const UserController = require("../userController/user")

app.use(express.json([]));
app.use(cors())
app.post('/login', UserController.login);
app.post('/signup', UserController.signup);
app.post('/verifyToken', UserController.verifyTokenFn)

module.exports = app