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
    let data = await users.findAll();
    console.log(data);
    return data;
  }
  catch (e) {
    console.log(e.message);
  }
}

//get user by id from db
exports.getUserById = async (id) => {
  try {
    let user = await users.findByPk(id);
    return user;
  }
  catch (e) {
    console.log(e.message);
  }
}

//save user data in db
exports.saveUserInDB = async (id, login, age, password, isdeleted) => {
  try {
    let res = await users.bulkCreate([                  //create doubt
      { id: id, login: login, age: age, password: password, isdeleted: isdeleted },
    ]);
    return res;
  }
  catch (e) {
    return null;
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
  catch (e) {
    console.log(e.message);
  }
}

//delete user by id from db
exports.deleteUserFromDB = async (id) => {
  try {
    let res = await users.destroy({ where: { id: id } });
    return res;
  }
  catch (e) {
    console.log(e.message);
  }
}