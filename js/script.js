const name = document.getElementById("name"); //Name field
const surname = document.querySelector("#surname"); //Surname field
const email = document.querySelector("#email"); //Email field
const email_conf = document.querySelector("#email_conf"); //Email_conf field
const tel = document.querySelector("#tel"); // Tel field
const address = document.querySelector("#address"); // Address field
const images = document.querySelectorAll(".images"); // Divs with class images to add icon
let regexname = /^[a-z | ά-ώ ,.'-]+$/i; // Regular expression for name validation (Mporw na valw osous tonous thelw!)
let regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*------------------------ Name Validation ----------------------*/

function valName() {

    if (name.value.trim().length == 0) {

        name.classList.remove("ok");
        name.classList.add("error");
        images[0].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> Field is empty! </p>"; // A red cross when it's not ok

    }

    else if (!regexname.test(name.value)) {

        name.classList.remove("ok");
        name.classList.add("error");
        images[0].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> This is not an accepted name! </p>"; // A red cross when it's not ok

    }

    else {

        name.classList.remove("error");
        name.classList.add("ok");
        images[0].innerHTML = "<img src='/images/tick.png' alt='Ok'>";

    }

}

function valSurname() {

    if (surname.value.trim().length == 0) {

        surname.classList.remove("ok");
        surname.classList.add("error");
        images[1].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> Field is empty! </p>"; // A red cross when it's not ok

    }

    else if (!regexname.test(surname.value)) {

        surname.classList.remove("ok");
        surname.classList.add("error");
        images[1].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> This is not an accepted surname! </p>"; // A red cross when it's not ok

    }

    else {


        surname.classList.remove("error");
        surname.classList.add("ok");
        images[1].innerHTML = "<img src='/images/tick.png' alt='Ok'>"; 

    }

}

/*----------------------- Email Validation --------------------------------*/

function valEmail() {

    if (email.value.trim().length == 0) {

        email.classList.remove("ok");
        email.classList.add("error");
        images[2].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> Field is empty! </p>"; // A red cross when it's not ok

    }

    else if (!regexemail.test(email.value)) {

        email.classList.remove("ok");
        email.classList.add("error");
        images[2].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> This is not an accepted e-mail! </p>"; // A red cross when it's not ok

    }

    else {


        email.classList.remove("error");
        email.classList.add("ok");
        images[2].innerHTML = "<img src='/images/tick.png' alt='Ok'>"; 

    }

}

function valEmailConf() {

    if (email_conf.value.trim().length == 0) {

        email_conf.classList.remove("ok");
        email_conf.classList.add("error");
        images[3].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> Field is empty! </>"; // A red cross when it's not ok

    }

    else if (!regexemail.test(email_conf.value)) {

        email_conf.classList.remove("ok");
        email_conf.classList.add("error");
        images[3].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> This is not an accepted email! </>"; // A red cross when it's not ok

    }

    else if (email_conf.value.trim() === email.value.trim()) {

        email_conf.classList.remove("error");
        email_conf.classList.add("ok");
        images[3].innerHTML = "<img src='/images/tick.png' alt='Ok'>";

    }

    else {

        email_conf.classList.remove("ok");
        email_conf.classList.add("error");
        images[3].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> This is not the same e-mail as above! </>";

    }


}

/*----------------------- Phone number validation -------------------------*/

function valTel() {

    let regextel = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g;

    if (tel.value.trim().length == 0) {

        tel.classList.remove("ok");
        tel.classList.add("error");
        images[4].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> Field is empty! </>"; // A red cross when it's not ok

    }

    else if (!regextel.test(tel.value)) {

        tel.classList.remove("ok");
        tel.classList.add("error");
        images[4].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> This is not an accepted phone number! </>"; // A red cross when it's not ok

    }

    else {


        tel.classList.remove("error");
        tel.classList.add("ok");
        images[4].innerHTML = "<img src='/images/tick.png' alt='Ok'>"; // A green tick when it is ok

    }

}

/*------------------------ Address Validation -----------------------------*/

function valAddress() {

    if (address.value.trim().length == 0) {

        address.classList.remove("ok");
        address.classList.add("error");
        images[5].innerHTML = "<img src='/images/cross.png' alt='Error'> <p class='errorTxt'> Field is empty! </>"; // A red cross when it's not ok

    }

    else {


        address.classList.remove("error");
        address.classList.add("ok");
        images[5].innerHTML = "<img src='/images/tick.png' alt='Ok'>"; // A green tick when it is ok

    }

}

/*-------------------------- Event Listeners -------------------------------*/

name.addEventListener("blur", valName); // On blur run this function
surname.addEventListener("blur", valSurname); // Same as above
email.addEventListener("blur", valEmail); 
email_conf.addEventListener("blur", valEmailConf); 
tel.addEventListener("blur", valTel); // Need to check regex !!!
address.addEventListener("blur", valAddress); // Needs regex !!!



