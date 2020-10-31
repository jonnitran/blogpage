function printError(id, message) {
    var name = document.getElementById(id);
    name.innerHTML = message;
}

function validateField(field, fieldErr, regex) {
    var f = document.getElementsByName(field);
    //console.log(field);

    if (f[0].value === "") {
        printError(fieldErr, "Error: " + field + " is empty.");
        return false;
    }
    else if (regex.test(f[0].value) == false) {
        printError(fieldErr, "Error: Invalid " + field + ".");
        return false;
    }
    else {
        printError(fieldErr, "");
        return true;
    }
}


//Backend Functions
function validateName() {
    var regex = /^[a-zA-Z/s]+$/;
    return validateField("name", "nameErr", regex);
}

function validateEmail() {
    var regex = /^\S+@\S+\.\S+$/;
    return validateField("email", "emailErr", regex);
}

function validatePhone() {
    var regex = /[0-9]{10}/;
    return validateField("mobile", "mobileErr", regex);
}


//Actual function being called
function validateForm() {
    //Validation array
    var valArray = new Array(3);
    valArray[0] = validateName();
    valArray[1] = validateEmail();
    valArray[2] = validatePhone();
    console.log('something');
    for (var i = 0; i < valArray.length; i++) {
        if (valArray[i] == false) {
            return false;
        }
    }
    return true;l
}