const express = require("express");
const router = require("./routes/routers.js").router;
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

// create, update, save, delete operations for users

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running on Port No : ${PORT}...`);
});
