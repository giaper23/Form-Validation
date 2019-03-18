"use strict"

const name = document.getElementById("name"); //Name field
const surname = document.querySelector("#surname"); //Surname field
const email = document.querySelector("#email"); //Email field
const email_conf = document.querySelector("#email_conf"); //Email_conf field
const tel = document.querySelector("#tel"); // Tel field
const address = document.querySelector("#address"); // Address field
const form = document.querySelectorAll(".form-group"); // All divs with class form-group
const submitButton = document.querySelector("#submitButton"); // The submit button
let regexname = /^[a-z | ά-ώ ,.'-]+$/i; // Regular expression for name validation (Mporw na valw osous tonous thelw!)
let regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*------------------------ Name Validation ----------------------*/

function valName() {

    if (name.value.trim().length == 0) {

        name.classList.remove("is-valid"); //Remove this class
        name.classList.add("is-invalid"); //Add this class
        document.querySelector("#name_error").innerHTML = "Empty field!"; //Inform the user that the field is empty
        return false; 
    }

    else if (!regexname.test(name.value)) {

        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
        document.querySelector("#name_error").innerHTML = "Invalid name!"; //Inform the user that the name is invalid
        return false;
    }

    else {
        
        name.classList.remove("is-invalid"); //Remove class for errors
        name.classList.add("is-valid"); //Add class for ok fields
        document.querySelector("#name_error").innerHTML = ""; //Erase previous text
        return true;
    }

}

function valSurname() {

    if (surname.value.trim().length == 0) {

        surname.classList.remove("is-valid");
        surname.classList.add("is-invalid");
        document.querySelector("#surname_error").innerHTML = "Empty field!";
        return false;
    }

    else if (!regexname.test(surname.value)) {

        surname.classList.remove("is-valid");
        surname.classList.add("is-invalid");
        document.querySelector("#surname_error").innerHTML = "Invalid surname!";
        return false;
    }

    else {

        surname.classList.remove("is-invalid");
        surname.classList.add("is-valid");
        document.querySelector("#surname_error").innerHTML = "";
        return true;
    }

}

/*----------------------- Email Validation --------------------------------*/

function valEmail() {

    if (email.value.trim().length == 0) {

        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        document.querySelector("#email_error").innerHTML = "Empty field!";
        return false;

    }

    else if (!regexemail.test(email.value)) {

        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        document.querySelector("#email_error").innerHTML = "Invalid email";
        return false;

    }

    else {


        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        document.querySelector("#email_error").innerHTML = "";
        return true;

    }

}

function valEmailConf() {

    if (email_conf.value.trim().length == 0) {

        email_conf.classList.remove("is-valid");
        email_conf.classList.add("is-invalid");
        document.querySelector("#emailconf_error").innerHTML = "Empty field!";
        return false;

    }

    else if (!regexemail.test(email_conf.value)) {

        email_conf.classList.remove("is-valid");
        email_conf.classList.add("is-invalid");
        document.querySelector("#emailconf_error").innerHTML = "Invalid email!";
        return false;

    }

    else if (email_conf.value.trim() === email.value.trim()) {

        email_conf.classList.remove("is-invalid");
        email_conf.classList.add("is-valid");
        document.querySelector("#emailconf_error").innerHTML = "";
        return true; //Returns true only if emails are identical

    }

    else {

        email_conf.classList.remove("is-valid");
        email_conf.classList.add("is-invalid");
        document.querySelector("#emailconf_error").innerHTML = "Email must be identical to the above!";
        return false;

    }


}

/*----------------------- Phone number validation -------------------------*/

function valTel() {

    let regextel = /^\d{10}$/;

    if (tel.value.trim().length == 0) {

        tel.classList.remove("is-valid");
        tel.classList.add("is-invalid");
        document.querySelector("#tel_error").innerHTML = "Empty field!";
        return false;

    }

    else if (!regextel.test(tel.value)) {

        tel.classList.remove("is-valid");
        tel.classList.add("is-invalid");
        document.querySelector("#tel_error").innerHTML = "Invalid phone number!";
        return false;

    }

    else {


        tel.classList.remove("is-invalid");
        tel.classList.add("is-valid");
        document.querySelector("#tel_error").innerHTML = "";
        return true;

    }

}

/*------------------------ Address Validation -----------------------------*/

function valAddress() {

    let regexaddress = /^(?=.*\d)[a-zA-Zά-ώ,\s\d\/]+$/;

    if (address.value.trim().length == 0) {

        address.classList.remove("is-valid");
        address.classList.add("is-invalid");
        document.querySelector("#address_error").innerHTML = "Empty field!";
        return false;

    }

    else if (!regexaddress.test(address.value)) {

        address.classList.remove("is-valid");
        address.classList.add("is-invalid");
        document.querySelector("#address_error").innerHTML = "Invalid address!";
        return false;

    }

    else {


        address.classList.remove("is-invalid");
        address.classList.add("is-valid");
        document.querySelector("#address_error").innerHTML = "";
        return true;

    }

}

/*-------------------------- Event Listeners -------------------------------*/

name.addEventListener("blur", valName); // On blur run this function
surname.addEventListener("blur", valSurname); // Same as above
email.addEventListener("blur", valEmail); 
email_conf.addEventListener("blur", valEmailConf); 
tel.addEventListener("blur", valTel); // Need to check regex !!!
address.addEventListener("blur", valAddress); // Need to check regex !!!

submitButton.addEventListener("click", function(e){

    if (valName() != true || valSurname() != true || valEmail() != true || valEmailConf() != true || valTel() != true || valAddress() != true) {
        
        /* Check on submit all forms to highlight error fields */
        valName();
        valSurname();
        valEmail();
        valEmailConf();
        valTel();
        valAddress();

        e.preventDefault(); // If any of the above "if conditions" is NOT true then stop the submit action
    }
    
});




