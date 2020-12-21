let username = "adam";
let passSave = "admin";

let passCount = 1;
let passMax = 3;

function resetTries() {
    passCount = 1;
}

//sets the username and password, it doesnt actually create a new one atm.
function createUser(){

    if(document.forms["formName"]["newUser"].value != "" && document.forms["formName"]["newPassword"].value != ""){
        passSave = document.forms["formName"]["newPassword"].value;
        username = document.forms["formName"]["newUser"].value;        
        document.getElementById("passStatus").innerHTML = "User sucessfully created!";
        document.getElementById("passStatus").style.color = "rgb(0, 255, 0)";
    }

    if(document.forms["formName"]["newUser"].value === "")
    {
        document.getElementById("passStatus").innerHTML = "Can´t create empty username!";
        document.getElementById("passStatus").style.color = "red";

    }
    
    if(document.forms["formName"]["newPassword"].value === "")
    {
        document.getElementById("passStatus").innerHTML = "Can´t create empty password!";
        document.getElementById("passStatus").style.color = "red";
    }


}


function checkPass() {

    //gets the password value
    let password = document.forms["formName"]["password"].value;
    let user = document.forms["formName"]["user"].value;
    //if pass is less or equal to passMax then do this
    if (passCount <= passMax) {

        //if user/pass is not correct
        if (password != passSave || user !=username ) {
            console.log(passCount);



            var attemptsLeft = 4 - passCount;

            //info to user about incorrect pass
            document.getElementById("passStatus").style.color = "gray";
            document.getElementById("passStatus").innerHTML = "you have " + attemptsLeft + "tries left.";

            //add 1 to count
            passCount++;

            return false;

        }

        //if correct pass and user do this
        if (password === passSave && user === username) {
            //sparar i cookies 1 dag
            setCookie("username",username,1);
            return true;
        }
    }

    //if there are no more tries do this
    else {
        document.getElementById("passStatus").innerHTML = "To many login tries, reset you password!";
        document.getElementById("passStatus").style.color = "red";
        return false;
    }

}