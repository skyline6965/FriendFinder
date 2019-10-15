var players = require("../data/friends");

// get friends from data
// return it as JSON data

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(players);
    });


    // get user details
    // 

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriend = 0;
        var minDiff = 40;

        for (var i = 0; i < players.length; i++) {
            var totalDIfference = 0;
            for (var j = 0; j < players[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - players[i].scores[j]);
                totalDIfference += difference;
            }


            if (totalDIfference < minDiff) {
                bestFriend = i;
                minDiff = totalDIfference
            }
        }
        players.push(user);
        res.json(players[bestFriend]);
    });
};







