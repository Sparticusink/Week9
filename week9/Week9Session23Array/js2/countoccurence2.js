var names = ["Kyle","Aidan", "Andrew ", "Cody ",
    "Emanuael", "Ethan ", "Haiden", " Jasui",
    " Jean", "Kyle", "Jerry", "Kyle", "Leah ", " Liam ",
    " Markssymillian", " Michael", "Ryder", " Rowan",
    " Stefan", " Thomas", " Vilda", "Suzanne ", "Kyle"];

var name = prompt( " please search for a name ")
counter = 0;

for( i = 0 ; i < names.length ; i++ ){
    
        if (name == names[i]) {
            addressNumber = i;
            addressFound = true;
            counter++
        }
    }
document.write( " the name you are looking for is" +name+ " and it occurs" +counter+ " times ")

