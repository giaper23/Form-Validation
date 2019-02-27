const name = document.getElementById("name"); //Name field
const surname = document.querySelector("#surname"); //Surname field
const email = document.querySelector("#email"); //Email field
const email_conf = document.querySelector("#email_conf"); //Email_conf field
const tel = document.querySelector("#tel"); // Tel field
const address = document.querySelector("#address"); // Address field
let regexname = /^[a-z ,.'-]+$/i; // Regular expression for name validation
let regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*------------------------ Name Validation ----------------------*/

function valName() {

    if (name.value.trim().length == 0) {

        alert("Field name is empty!");

    }

    else if (!regexname.test(name.value)) {

        alert("This is not an accepted name!"); // Alert if name is not acceptable

    }

}

function valSurname() {

    if (surname.value.trim().length == 0) {

        alert("Field surname is empty!");

    }

    else if (!regexname.test(surname.value)) {

        alert("This is not an accepted name!"); // Alert if name is not acceptable

    }

}

/*----------------------- Email Validation --------------------------------*/

function valEmail() {

    if (email.value.trim().length == 0) {

        alert("Field is empty!");

    }

    else if (!regexemail.test(email.value)) {

        alert("This is not an accepted email!"); // Alert if name is not acceptable

    }

}

function valEmailConf() {

    if (email_conf.value.trim().length == 0) {

        alert("Field is empty!");

    }

    else if (!regexemail.test(email_conf.value)) {

        alert("This is not an accepted email!"); // Alert if name is not acceptable

    }


}

/*----------------------- Phone number validation -------------------------*/

function valTel() {

    let regextel = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g;

    if (tel.value.trim().length == 0) {

        alert("Field phone is empty!");

    }

    else if (!regextel.test(tel.value)) {

        alert("This is not an accepted phone number!"); // Alert if name is not acceptable

    }

}

/*------------------------ Address Validation -----------------------------*/

function valAddress() {

    if (address.value.trim().length == 0) {

        alert("Field address is empty!");

    }

}

/*-------------------------- Event Listeners -------------------------------*/

name.addEventListener("blur", valName); // When you leave name field run this function
surname.addEventListener("blur", valSurname); // Same as above
email.addEventListener("blur", valEmail); 
email_conf.addEventListener("blur", valEmailConf); 
tel.addEventListener("blur", valTel); // Need to check regex !!!
address.addEventListener("blur", valAddress); // Needs regex !!!



