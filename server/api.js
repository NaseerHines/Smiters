const { Router } = require("express");
const axios = require("axios");
const { token } = require('../config');
const { postUser, getUser, updateUser } = require('../db/index')
const apiRouter = Router();

const getUser = (username, platform, cb) => {
    // put in smiteAPI url
    const apiUrl = ``;
    const options = {
        headers: {
            Authorization: `Bearer ${token}`,
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
    getUser(username, platform, (data) => {
    console.log(data);
    postUser(data);
    res.send(data);
    });
});

apiRouter.patch("/update", () => {

});

module.exports.apiRouter = apiRouter;