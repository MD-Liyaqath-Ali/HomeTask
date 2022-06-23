const userService = require("../services/userServices");

//get all users from db with help of services
exports.getUsers = async (req, res) => {                   
    let list = [];
    list = await userService.getUsersFromDB();          
    const loginSubstring = '', limit = 10;
    list.filter(user => user.login.includes(loginSubstring.toString()) && !user.isDeleted) 
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, Number(limit));
    res.send(list);
}

//get user by id from db with help of services
exports.getUsersById = async (req, res) => {
    const id = req.params.id;
    try {                                             
        const userToFind = await userService.getUserById(id);
        res.send({
            message: "Retrieved user details",
            data: userToFind
        });
    } catch (err) {
        throw err;
    }
}

//save user in db using services 
exports.saveUser = async (req, res) => {
    const { id, login, age, password } = req.body;
    const isdeleted = false;
    try {
        await userService.saveUserInDB(id, login, age, password, isdeleted);
        res.send({
            message: "User inserted successfully"
        });
    } catch (err) {
        throw err;
    }
}

//update user by id in db with help of services
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { login, password, age } = req.body;            
    try {
        const userToUpdate = await userService.getUserById(id);
        if (userToUpdate) {
            await userService.updateUserInDB(id, login, password, age);
            res.send({
                message: "User updated successfully"
            });
        }
    } catch (err) {
        throw err;
    }
}
//delete user by id from db using services
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
   
    try {
        await userService.deleteUserFromDB(id)
        res.send({
            message: "User deleted successfully"
        });
    }
    catch (err) {
        throw err;
    }
}
exports.invalidUrlEncontered = (req, res) => {
    res.status(404).json({
        message: `Resource not found - ${req.originalUrl}`
    });
}