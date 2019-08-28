var friends = require("../data/friends");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    var coder = req.body;
    
    

    // compute best match from scores
    var coderMatch = {};

    for(var i = 0; i < coder.scores.length; i++) {
      if(coder.scores[i] == "1 (I would never say that!!!!)") {
        coder.scores[i] = 1;
      } else if(coder.scores[i] == "5 (Damm are you reading my mind)") {
        coder.scores[i] = 5;
      } else {
        coder.scores[i] = parseInt(coder.scores[i]);
      }
    }


    var coderMatchIndex = 0;

    var coderMatchDif = 40;

    for(var i = 0; i < friends.length; i++) {
      var totalDif = 0;

      for(var index = 0; index < friends[i].scores.length; index++) {
        var DifOneScore = Math.abs(friends[i].scores[index] - coder.scores[index]);
        totalDif += DifOneScore;
      }


      if (totalDif < coderMatchDif) {
        coderMatchIndex = i;
        coderMatchDif = totalDif;
      }
    }


    coderMatch = friends[coderMatchIndex];
    friends.push(coder);
    res.json(coderMatch);
    });

};