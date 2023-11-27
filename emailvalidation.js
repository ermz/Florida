function validateEmail(event) {
    let emailForm = document.querySelector("#stateForm");

    emailForm.confirmemail.style.backgroundColor = "Red";

    if (emailForm.confirmemail.value === emailForm.email.value) {
        emailForm.confirmemail.style.backgroundColor = "LightGreen";
    }

    event.preventDefault()
}

let emailForm = document.querySelector("#stateForm");
emailForm.validate.addEventListener("click", validateEmail);