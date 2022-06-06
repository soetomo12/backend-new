const repository = require('../repositories/usersRepository');

const create = (value) => repository.create(value);
const list = async () => {
    try {
      const users = await repository.findAll();
      return users;
    } catch (err) {
      throw err;
    }
};
const get = (id) => repository.find(id);
const getByEmail = (email) => repository.findOne(email);
const update = (id, value) => repository.update(id, value);
const deleteUser = (id) => repository.deleteUser(id);

module.exports = {
    create,
    list,
    get,
    getByEmail,
    update,
    deleteUser,
};