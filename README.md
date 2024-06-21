# ServerwithNodeJS-ExpressJS
🎓 THIS SERVER USE NODEJS & ExpressJS USING FOR LEARNING AND PORTFOLIO

#### FILE SERVEREXPRESS.JS
> serverExpress.js

![Code1](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/b07f222f-1cc8-452b-9308-1ff2a18144ec)

![Code2](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/3d3fd193-6f64-4709-88a7-252fc356b237)

```js
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
```

#### FILE FILEDATAJSON.JOSN
Create data in file filedatajson.json
> filedatajson.json

![filedataJson](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/e1d5d52e-3fc7-4149-a73e-101251befeca)

```json
[
    {
        "id" : 1,
        "fname" : "firstName",
        "lname" : "lastName"
    }
]
```

### COMMAND RUN SERVER

![RunServer](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/e678026a-4495-40b1-8b1c-ad91281e1245)

```
node serverExpress.js
```

### TEST SEND DATA

#### localhost:3000/

![ShowText](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/ab39852a-103c-4a19-a30a-a5c517cba61e)

#### localhost:3000/saidHello

![SaidHello](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/73888cb6-613c-4f47-bcc7-b267a95e7db8)

#### localhost:3000/api/getData

![GetUser](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/80f76978-65b7-4865-b146-12a6b0b1e289)

#### localhost:3000/api/postData

![AddUser](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/e9bd71dd-d831-4dfc-a419-2f29a7315035)

#### localhost:3000/api/getData/:id

![GetIDUser](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/bb14db33-468b-479f-a5bf-a707a962ee59)

#### localhost:3000/api/putData/:id

![UpdateUser](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/f0ce5131-607b-4169-a52f-87bf64031dbd)

#### localhost:3000/api/deleteData/:id

![DeleteUser](https://github.com/DevChalaam/ServerwithNodeJS/assets/124075393/a8217255-0cb6-49ea-bdc5-654886bee5f1)
