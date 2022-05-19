const express = require("express");
const PORT = process.env.PORT || 3500;
const app = express();
app.use(express.json());
const router = require("./RouteController").router;

app.use("/", router);

app.listen(PORT, () => {
  console.log(
    `The server is running on port ${PORT} To access it visit Postman
     localhost:${PORT}/getUsers                                 - To get all the Users
     localhost:${PORT}/getUser/id                               - To get User with specific id
     localhost:${PORT}/createUser                               - To create a new User
     localhost:${PORT}/deleteUser/id                            - To delete a User with specific id
     localhost:${PORT}/updateUser/id                            - To update User with specific id
     localhost:${PORT}/getAutoSuggestUsers/loginSubstring/limit - To get an AutoSuggest list in a sorted order with specific limit and substring
     `
  );
});
