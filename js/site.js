//Get the string from the page
//controller function
function getValues(){
    
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString){
    
    let revString = [];

    //let name = Casey
    //name[0] = "C";
    //name[4] = "y";
    //last position in an array name.length minus 1

    //reverse a string using a for loop
    for (let index = userString.length - 1 ; index >= 0; index--) {
        revString += userString[index];
        
    }

    return revString;

}

//Display the reversed string to the user
//View function
function displayString(revstring){

    //write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}