// get friends from data
const friends = require("../data/friends");


// routing
module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        let userScore = req.body.scores;
        const scoresArr = [];
        let bestMatch = 0;

        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length;j++){
                scoreDiff += (Math.abs(parseInt((friends[i].scores[j]) - parseInt(userScore[j]))))
            }
            scoresArr.push(scoreDiff);
        }
        for (var i = 0; i < scoresArr.length; i++){
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        var bestPro = friends[bestMatch];
        friends.push(req.body)
        res.json(bestPro);

        console.log(req.body);
    });

    app.post("/api/clear", function(req, res){
        friends.length = [];
        res.json({
            ok: true
        });
    });
};







