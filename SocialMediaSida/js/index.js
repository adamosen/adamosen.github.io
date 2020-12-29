//lägger in en kommentar i en post
function addComment(){

    var input;
    input = document.getElementById("comment").value;  

    var username = getCookie("username");


    document.getElementById("newComments").innerHTML +=  "<br>"+username +": " +input;

    
}


//gillar eller unlikar en post
function likePost(){
    
    if( document.getElementById("like").innerHTML === "Gilla")
    {
        document.getElementById("like").innerHTML = "Sluta gilla";
    }
    else
    document.getElementById("like").innerHTML = "Gilla";




 
}