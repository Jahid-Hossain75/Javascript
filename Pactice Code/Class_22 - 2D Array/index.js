

// 2D Array
 var playersinfo = [
    // row & column
    ["Jahid", 50],
    ["Sakib", 40],
    ["Abid", 55],
    ["Rana", 45],
    ["Razu", 65]
 ];

//  example = playersinfo[index row number][index column number]
 document.write(playersinfo[1][0]);
 document.write("<br>");
 document.write(playersinfo[3][1]);
 document.write("<br><br>");

//  2D using loop
for(var x=0; x<5; x++){
    for(var y=0; y<2; y++){
        document.write(playersinfo[x][y]+" ");
    }
    document.write("<br>");
}
document.write("<br><br><br>");





//  Task 9
// 2D Array
// Create a function called highestRunScorer that will
// Receive a 2d array called players
// Based on highest score, return the name of the player

function highestRunScorer(players){
    var max = players[0][0];
    var max = players[0][1];
    for(var i=1; i<players.length; i++){
        if(max < players[i][1]){
            max = players[i][1];
        }
    }
    return max;
}

var players = [
    ["Sajid", 77],
    ["Roky", 88],
    ["Emamul", 95],
    ["Rony", 66],
    ["Emon", 44]
];
var max_score = highestRunScorer(players);
document.write(max_score);