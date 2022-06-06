const { users } = require('../models');

const create = (value) => users.create(value);
const findAll = () => users.findAll();
const find = (id) => users.findByPk(id);
const findOne = (email) => users.findOne({ where: { email } });
const update = (id, value) => users.update(value, { where: { id } });
const deleteUser = (id) => users.destroy({ where: { id } });

module.exports = {
  create,
  findAll,
  findOne,
  find,
  update,
  deleteUser,
};