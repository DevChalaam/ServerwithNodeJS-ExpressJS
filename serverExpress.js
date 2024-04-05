// IMPORT MODULES NODE JS 
const http = require("http");

// IMPORT MODULE EXPRESS JS
const express = require("express");
const app = express();

// IMPORT FILE JSON
const importUser = require("../filedatajson.json");

// SETTING PORT SERVER
const portServer = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is Running.");
});

// RESPONSIVE TEXT HELLO CHALAAM
app.get("/api/saidHello", (req, res) => {
    res.send("Hello CHALAAM");
});

// RESPONSIVE FILE DATA IN FILE JSON
app.get("/api/getData", (req, res) => {
    res.json(importUser);
});

app.get("/api/getData/:id", (req, res) => {
    res.json(importUser.find(user => user.id === Number(req.params.id)));
});

// CREATE NEW USER
app.post("/api/postData", (req, res) => {
    importUser.push(req.body);
    let addData = req.body;
    res.send(`Add new user '${addData.fname} ${addData.lname}' successfuly.`)
});

// UPDATE USER
app.put("/api/putData/:id", (req, res) => {
    let updateData = importUser.find(user => user.id === Number(req.params.id));

    if (!updateData) {
        return res.status(404).send(`Update data '${user.fname} ${user.lname}' not found.`);
    }

    res.send(`Update user '${updateData.fname} ${updateData.lname}' successfuly.`);
});

// DELETE USER
app.delete("/api/deleteData/:id", (req, res) => {
    let deleteUser = importUser.find(user => user.id === Number(req.params.id));

    if (deleteUser === -1) {
        return res.status(404).send(`Delete data '${user.fname} ${user.lname}' not successfuly.`);
    }

    res.send(`Delete user '${deleteUser.fname} ${deleteUser.lname}' successfuly.`);
});

// LISTEN PORT SERVER
app.listen(portServer, () => {
    console.log("PORT SERVER CHALAAM IS WORKING ON PORT : 3000");
});