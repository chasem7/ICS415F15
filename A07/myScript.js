
function getClasses(elem){

    var className = elem.className.split(" ");
    var arrayName = new Array();

    for(var i = 0; i < className.length; i++){

        arrayName[i] = "\"" + className[i] + "\"";

    }

    return arrayName;
}

function addClass(elem, className){

    if(elem.hasAttribute("class")){

        elem.className += " " + className;

    }

    else{

        elem.setAttribute("class",className);

    }

}

function validateForm(){

    var myBoolean = false;
    var usernameBool = false;
    var emailBool = false;
    var passwordBool = false;
    var confirmBool = false;

    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    var password = document.forms["myForm"]["password"].value;
    var confirm = document.forms["myForm"]["confirm"].value;

    if(username == null || username == " "){

        document.forms["myForm"]["name"].style.background = "red";
        myBoolean = true;
        usernameBool = true;

    }

    if(at < 1 || dot < at + 2 || dot + 2 >= email.length){

        document.forms["myForm"]["email"].style.background = "red";
        myBoolean = true;
        emailBool = true;

    }

    if(password == null || password == " "){

        document.forms["myForm"]["password"].style.background = "red";
        myBoolean = true;
        passwordBool = true;

    }

    if(password != confirm || confirm == null || confirm == " "){

        document.forms["myForm"]["confirm"].style.background = "red";
        myBoolean = true;
        confirmBool = true;

    }

    if(myBoolean){

        var div = document.createElement("div");
        var text = document.createElement("h3");
        var node = document.createTextNode("Error in form");
        text.appendChild(node);
        div.appendChild(text);

        if(usernameBool){

            var text = document.createElement("p");
            var node = document.createTextNode("Username is blank");
            text.appendChild(node);
            div.appendChild(text);

        }

        if(emailBool){

            var text = document.createElement("p");
            var node = document.createTextNode("Email is invalid");
            text.appendChild(node);
            div.appendChild(text);

        }

        if(passwordBool){

            var text = document.createElement("p");
            var node = document.createTextNode("Password is blank");
            text.appendChild(node);
            div.appendChild(text);

        }

        if(confirmBool){

            var text = document.createElement("p");
            var node = document.createTextNode("Passwords do not match");
            text.appendChild(node);
            div.appendChild(text);

        }

        var elem = document.getElementsByTagName("form")[0];

        elem.parentNode.insertBefore(div,elem);

        return false;

    }

}