const express = require("express");
const router = express.Router();
const users = require("./dataBase/data").users;
const Joi = require('joi')

const getUsers = (req, res) => {
    res.send({ users });
};
const getUserById = (req, res) => {
    const id = req.params.id;
    const position = users.findIndex((user) => user.id === id);
    if (position != -1) {
        res.statusCode = 200;
        res.send(users[position]);
    } else {
        res.statusCode = 404;
        res.send({ message: "unable to find the user"});
    }
};
const updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const position = users.findIndex((user) => user.id === id);
    if (position != -1) {
        const result = validateUser(data);
        if (result.error == undefined) {
            users[position] = data;
            res.statusCode = 200;
            res.send({ message: "successfully updated user's data" });
        }
        else {
            res.statusCode = 404;
            errorMessage = result.error.details;
            res.send({ errorMessage });
        }
    } else {
        res.statusCode = 404;
        res.send({ message: "unable to find the user" });
    }
};
const getAutoSuggestUsers = (req,res)=>{
    const loginSubstring = req.params.loginSubstring;
    const limit = req.params.limit;

    const SortedUsers = users.sort((a,b) => a.login.localeCompare(b.login));
    const suggestedUsers = (SortedUsers.filter(user => user.login.indexOf(loginSubstring) != -1)).slice(0,limit);
    res.statusCode = 200;
    res.send({message:"suggested users",Users:suggestedUsers});
};
const deleteUser = (req, res) => {
    const id = req.params.id;
    const position = users.findIndex((user) => user.id === id && user.isDeleted === false);
    const userToBeDeleted = users[position];
    if (position != -1) {
        userToBeDeleted.isDeleted = true;
        res.statusCode = 200;
        res.send({ message: "successfully deleted a user's data" });
    } else {
        res.statusCode = 404;
        res.send({ message: "user not found"});
    }
};
const createUser = (req, res) => {
    const data = req.body
    const position = users.findIndex((user) => user.id === data.id);
    if (position === -1) {
        const result = validateUser(data);
        if (result.error == undefined) {
            users.push(data);
            res.send({ message: "sucessfully created a user" })
        }
        else {
            res.statusCode = 404;
            errorMessage = result.error.details;
            res.send({ errorMessage });
        }
    }
    else {
        res.send({ message: "user with this id already exists" });
    }
};
const wrongUrlEntered = (req, res) => {
    res.statusCode = 404;
    res.json(`could not find resource - ${req.originalUrl}`);

}
function validateUser(user) {
    const schema = Joi.object({
        id: Joi.number().required(),
        login: Joi.string().required(),
        password: Joi.string().alphanum().required(),
        age: Joi.number().required().min(4).max(130),
        isDeleted: Joi.boolean().required(),
    });
    const validation = schema.validate(user);
    return validation;
}
router.use('/getAutoSuggestUsers/:loginSubstring/:limit',getAutoSuggestUsers);
router.use("/getUsers", getUsers);
router.use("/getUser/:id", getUserById);
router.use("/updateUser/:id", updateUser);
router.use("/deleteUser/:id", deleteUser);
router.use("/createUser", createUser);
router.use("/*", wrongUrlEntered);

module.exports = {
    router: router,
}