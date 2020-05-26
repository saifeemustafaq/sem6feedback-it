function okay() {
    $("#errorbox").dialog("close");

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
            return true;
        } else {
            console.log("incorrect credentials");
            return false;
        }

    }

}