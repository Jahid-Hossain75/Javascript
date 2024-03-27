// Switch statement
// var digit = prompt("Enter any digit: ");
var digit = 5;

switch (digit) {
    case "":
        document.write("Please Input Digit");
        break;
    case "1":
        document.write("One");
        break;
    case "2":
        document.write("Two");
        break;
    case "3":
        document.write("Three");
        break;
    case "4":
        document.write("Four");
        break;
    case "5":
        document.write("Five");
        break;
    case "6":
        document.write("Six");
        break;
    default:
        document.write("Not a Digit");
        break;
}
document.write("<br><br><br>");






// vowel or consonant
var letter = prompt("Enter Any letter: ");
letter = letter.toLocaleLowerCase();
switch (letter) {
    case " ":
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonant");
        break;
}
