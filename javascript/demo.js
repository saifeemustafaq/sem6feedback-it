function okay() {
    $("#errorbox").dialog("close");
    document.getElementById("mainDiv").style.opacity = 1;
    document.getElementsByTagName("h1").style.opacity = 1;


}

function valid() {
    var data = {
        "a": "1",
        "b": "2",
        "c": "3"
    }
    var u = document.getElementById("uname").value; //input() 
    var p = document.getElementById("pass").value; //input() 

    for (var key in data) {
        if (key === u && data[key] === p) {
            console.log("correct credential");
            return okay();
        } else {
            console.log("incorrect credentials");
            return false;
        }

    }

}

// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// }, false);