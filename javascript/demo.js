function okay() {
    //var truevar = valid()

    // if (truevar === true) {
    //     $("#errorbox").dialog("close");
    //     var mD = document.getElementsByClassName("mainDiv");
    //     mD.style.opacity = 1;
    //     var head = document.getElementsByTagName("h1");
    //     head.style.opacity = 1;
    //     return true;
    // }

    $("#errorbox").dialog("close");
    $(".mainDiv").css("opacity", "1");
    $("h1").css("opacity", "1");
    // var mD = document.getElementsByClassName("mainDiv");
    // mD.style.opacity = 1;
    // var head = document.getElementsByTagName("h1");
    // head.style.opacity = 1;
    return true;

}

function notokay() {
    return null;
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
            alert("incorrect credentials");
            break;
            //return false;
        }

    }

}

// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// }, false);