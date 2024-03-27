
// 1D Array 
var names = ['Jahid', 'Sakib', 'Abid', 'Rana', 'Emon'];
for (var i = 0; i < 5; i++) {
    document.write(i +". "+names[i] + "<br>");
}
document.write("<br><br><br>");





// Task 8
// Create a function called highestScore that will
// receive a 1D Array called score
// return the highest score
function highestScore(score){
    var max = score[0];
    for(var j = 1; j < score.length; j++){
        if(max < score[j]){
            max = score[j];
        }
    }
    return max;
}
var score = [20, 15, 65, 85, 42, 12, 22];
var max_score = highestScore(score);
document.write(max_score);