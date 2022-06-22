const express = require("express");
const { userSchema } = require("../models/users");
const router = express.Router();
const userController = require("../controllers/userControllers");
const userValidator = require("../services/userServices").userValidator;



router.get('/getAllUsers', userController.getUsers);         //to get all users
router.get('/getUser/:id', userController.getUsersById); //to get user by specific id
router.post('/saveUser', userValidator(userSchema), userController.saveUser);   //to save user
router.put('/updateUser/:id', userValidator(userSchema), userController.updateUser); //update user by id
router.delete('/deleteUser/:id', userController.deleteUser); //delete user  by id

module.exports = {
    router: router,
}