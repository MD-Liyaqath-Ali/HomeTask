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
    let userToFind;
    try {                                             
        userToFind = await userService.getUserById(id);
        res.send(userToFind)
        if (!userToFind){ 
            res.status(404)
            res.send('User not found');
        }else{res.send(userToFind);}
    }
    catch (err) {
        console.log(err.message);
        res.statusCode = 404;
        throw err;
    }
}

//save user in db using services 
exports.saveUser = async (req, res) => {
    const { id, login, age, password } = req.body;
    console.log(id);
    const isdeleted = false;
    try {
        await userService.saveUserInDB(id, login, age, password, isdeleted);
        res.send("Data inserted successfully");
    }
    catch (err) {
        res.send("Already data is existing with same id");
        res.statusCode = 404;
    }
}

//update user by id in db with help of services
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { login, password, age } = req.body;            
    const userToUpdate = await userService.getUserById(id);
    if(!userToUpdate){res.send('User not found')};
    try{
        await userService.updateUserInDB(id, login, password, age);
        res.send("updated successfully");
    }catch (err) {
        res.send(err.message);
        res.statusCode = 404;
    }
}
//delete user by id from db using services
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const userToDelete = await userService.getUserById(id);
    if(!userToDelete||userToDelete.isDeleted)res.send('User not found');else{
    try {
        await userService.deleteUserFromDB(id)
        res.send("Succesfully deleted!");
    }
    catch (err) {
        res.send(err.message);
        res.statusCode = 404;
    }
    }
}
exports.invalidUrlEncontered = (req, res) => {
    res.statusCode = 404;
    res.json(`could not find resource - ${req.originalUrl}`);

}