/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const usersController = require("./usersController");
const authController = require("./authController");
const handleGoogleLoginOrRegister = require("./handleGoogleLoginOrRegister");
const carsController = require("./carsController");

module.exports = {
  usersController,
  authController,
  handleGoogleLoginOrRegister,
  carsController,
};
