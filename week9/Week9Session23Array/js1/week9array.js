var names = ["Aidan", "Andrew ", "Cody ",
    "Emanuael", "Ethan ", "Haiden", " Jasui",
    " Jean", "Jerry", "Kyle", "Leah ", " Liam ",
    " Markssymillian", " Michael", "Ryder", " Rowan",
    " Stefan", " Thomas", " Vilda", "Suzanne "];

var arrayLength = names.length;
var nameChoice = prompt(" please enter a  name to search for :");
var addressNumber;
var addressFound = false;

for (var i = 0; i < arrayLength; i++) {
    if (nameChoice == names[i]) {
        addressNumber = i;
        addressFound = true;
    }
}

if (addressFound == true) {
    document.write(" The name " + nameChoice + " is located at address " + addressNumber)
}
else {
    document.write(" the name " + nameChoice + " is not on the list ")
}

