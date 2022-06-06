const { cars } = require("../models");
const { Op, Sequelize } = require("sequelize");

module.exports = {
  findAll() {
    return cars.findAll();
  },

  getTotalCars() {
    return cars.count();
  },

  filter(date, time, passengers) {
    return cars.findAll({
      where: {
        [Op.and]: {
          available: true,
          availableAt: {
            [Op.lte]: date + " " + time,
          },
          capacity: {
            [Op.gt]: passengers,
          },
        },
      },
    });
  },
};
