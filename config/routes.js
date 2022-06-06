const express = require("express");
const cors = require("cors");
const controllers = require("../app/controllers");
const authController = controllers.api.v1.authController;
const usersController = controllers.api.v1.usersController;
const handleGoogleLoginOrRegister = controllers.api.v1.handleGoogleLoginOrRegister;
const carsController = require("../app/controllers/api/v1/carsController");
const apiRouter = express.Router();
apiRouter.use(cors());
apiRouter.use(express.json());
require("dotenv").config();
const { OAUTH, FILTER_CAR, LOGIN, REGISTER, AUTH_ME, UPDATE_DELETE, USER } = process.env;

// Melihat seluruh user pada database
apiRouter.get(USER, usersController.getUsers);

// Memnambahkan user pada database
apiRouter.post(REGISTER, usersController.register);

// Melakukan login
apiRouter.post(LOGIN, authController.login);

// Melakukan login melalui google
apiRouter.post(OAUTH, handleGoogleLoginOrRegister);

// Melakukan update & delete user
apiRouter.route(UPDATE_DELETE).put(usersController.update).delete(usersController.deleteUser);

// Melakukan get Cars
apiRouter.get(FILTER_CAR, carsController.list);

// Mendapatkan user yang login
apiRouter.get(AUTH_ME, authController.authorize, usersController.getCurrentUser);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
