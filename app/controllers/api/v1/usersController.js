const service = require('../../../services/usersService');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, encryptedPassword) => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve(encryptedPassword);
      });
    });
};

const register = async (req, res) => {
    const { email, password, username } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const newUser = {
      email,
      password: encryptedPassword,
      username,
    };
    service
      .create(newUser)
      .then((user) => {
        res.status(201).json({
          status: "success",
          data: user,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "error",
          message: err.message,
        });
      });
};

const getUsers = (req, res) => {
    service
      .list()
      .then((users) => {
        res.status(200).json({
          status: "success",
          data: users,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "error",
          message: err.message,
        });
      });
};

const getCurrentUser = (req, res) => {
    res.status(200).json({
      status: "success",
      data: req.user.email
    });
}

const update = (req, res) => {
    const { email, password, username } = req.body;
    const { id } = req.params;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      const updateUser = {
        email,
        password: hash,
        username,
      };
  
      service
        .update(id, updateUser)
        .then(() => {
          res.status(200).json({
            status: "success",
            message: "User updated successfully",
          });
        })
        .catch((err) => {
          res.status(422).json({
            status: "error",
            message: err.message,
          });
        });
    });
  };
  
const deleteUser = (req, res) => {
    service
      .deleteUser(req.params.id)
      .then(() => {
        res.status(200).json({
          status: 'success',
          message: 'User deleted successfully',
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "error",
          message: err.message,
        });
      });
};

module.exports = {
    register,
    getUsers,
    getCurrentUser,
    update,
    deleteUser,
};