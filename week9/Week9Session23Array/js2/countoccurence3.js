var names = ["Kyle","Aidan", "Andrew ", "Cody ",
    "Emanuael", "Ethan ", "Haiden", " Jasui",
    " Jean", "Kyle", "Jerry", "Kyle", "Leah ", " Liam ",
    " Markssymillian", " Michael", "Ryder", " Rowan",
    " Stefan", " Thomas", " Vilda", "Suzanne ", "Kyle"];

var name = prompt( " please search for a name ")
var nameExists = false;
counter = 0;
var postion = 0


for( i = 0 ; i < names.length ; i++ ){
    
        if (name == names[i]) {
            addressNumber = i;
            nameExists = true;
            counter++
            document.write( " the name you are looking for is" +name+ " and it occurs" +counter+ " times and it occurs at element postion "+postion+ "<br>" )
            postion++
        }
    }



for( i = 21 ; i < names.length ; i++ ){
    if(name != names [i] && nameExists == false ){

     document.write( " the name you are looking for is not the list ")
     nameExists = true;
     
    }


}
