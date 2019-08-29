// Require data file
var friends = require("../data/friends");

// API route for GET
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //  API route for POSY that does all math to figure out the user to display
  app.post("/api/friends", function (req, res) {
    console.log(req.body);

    // Variablies for the formula below
    var coder = req.body;
    var coderMatch = {};
    var coderMatchIndex = 0;
    var coderMatchDif = 40;

    //  Loop through coder values and remove the helper text
    for (var i = 0; i < coder.scores.length; i++) {
      if (coder.scores[i] == "1 (I would never say that!!!!)") {
        coder.scores[i] = 1;
      } else if (coder.scores[i] == "5 (Damm are you reading my mind)") {
        coder.scores[i] = 5;
      } else {
        coder.scores[i] = parseInt(coder.scores[i]);
      }
    }


    //  Loop through and find the best match coder for the user based on their inut of values
    for (var i = 0; i < friends.length; i++) {
      var totalDif = 0;

      for (var index = 0; index < friends[i].scores.length; index++) {
        var DifOneScore = Math.abs(friends[i].scores[index] - coder.scores[index]);
        totalDif += DifOneScore;
      }

      if (totalDif < coderMatchDif) {
        coderMatchIndex = i;
        coderMatchDif = totalDif;
      }
    }

    coderMatch = friends[coderMatchIndex];
    
    // Push user data to array 
    friends.push(coder);

    // Return the best matched coder
    res.json(coderMatch);
  });

};