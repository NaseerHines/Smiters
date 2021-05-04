const { Router } = require("express");
const axios = require("axios");
const { authKey } = require('../config');
const { postUser, getUser, updateUser } = require('./db/index');
const apiRouter = Router();

const grabAccount = (username, platform, cb) => {
    // put in smiteAPI url
    const apiUrl = `http://api.smitegame.com/smiteapi.svc`;
    const options = {
        headers: {
            Authorization: `Bearer ${authKey}`,
        },
    };
    return axios
    .get(apiUrl, options)
    .then((account) => {
        // fix this line after checking postman
        const stats = account.data;
        cb(stats);
    })
    .catch((err) => {
        console.log(err, "didn't work");
    });
};

apiRouter.post("/save", (req, res) => {
    const { username, platform } = req.body;
    console.log(username, platform);
    grabAccount(username, platform, (data) => {
    console.log(data);
    postUser(data);
    res.send(data);
    });
});

apiRouter.get("/stats", () => {
    const { username, platform } = req.body;
    console.log(username, platform);
    getUser(username, platform, (data) => {
    console.log(data);
    res.send(data);
    });
});

// need to write the update one

module.exports.apiRouter = apiRouter;