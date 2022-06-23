const { users } = require("../data-access/db-con");

//validating given data with schema
exports.userValidator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error === null || error === void 0 ? void 0 : error.isJoi) {
      res.status(400).json(error.message);
    }
    else {
      next();
    }
  };
};

//get all users from db
exports.getUsersFromDB = async () => {
  try {
    return await users.findAll();
  }
  catch (err) {
    console.log(err.message);
    throw err;
  }
}

//get user by id from db
exports.getUserById = async (id) => {
  try {
    return await users.findByPk(id);
  }
  catch(err) {
    console.log(err.message);
    throw err;
  }
}

//save user data in db
exports.saveUserInDB = async (id, login, age, password, isdeleted) => {
  try {
    let res = await users.bulkCreate([                 
      { id: id, login: login, age: age, password: password, isdeleted: isdeleted },
    ]);
    return res;
  }
  catch (err) {
    console.log(err.message);
    throw err;
  }
}

//update user by id in db
exports.updateUserInDB = async (id, login, password, age) => {
  try {
    let res = await users.update(
      { login: login, password: password, age: age },
      { where: { id: id } }
    );
    return res;
  }
  catch (err) {
    console.log(err.message);
    throw err;
  }
}

//delete user by id from db
exports.deleteUserFromDB = async (id) => {
  try {
    return await users.destroy({ where: { id: id } });
  }
  catch (err) {
    console.log(err.message);
    throw err;
  }
}