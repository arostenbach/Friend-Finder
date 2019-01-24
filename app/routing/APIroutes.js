var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        let mySum = 0;
        for (let i = 0; i < req.body.scores.length; i++) {
            mySum += parseInt(req.body.scores[i]);
        }
    console.log(mySum);

    let friendSum = [];
    for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    let sum = 0;
    for (let j = 0; j < friends [i].scores.length; j++) {
        sum += friends[i].scores[j];
    }
        friendSum.push(sum);
    }
    let differnce = Math.abs(mySum - friendSum[0]);
    let index = 0;
    for (let m = 0; m <friendSum.length; m++) {
        if (Math.abs(friendSum[m] - mySum) < differnce) {
            difference = Math.abs(friendSum[m] - mySum);
            index = m;
        }
    }

    friends.push(req.body);

    res.json(freinds[index]);
    });

    app.post("/api/clear", function (req, res) {

        friends.length = [];

        res.json({ ok: true});
    });

};