// keypress show count key
var count = 0;
 document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "Kyepress = "+count;
 });

 
// keypress show key
document.addEventListener("keypress", function(event){
    var text = event.key;
    document.getElementById("para").innerHTML = "Kyepress = "+text;
});