const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("Form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValiue = firstName.value;

    if (checkInputLength(firstNameValiue) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
}

function checkInputLength(value) {

    const trimmedValue = value.trim();

    if (trimmedValue.length >= 2) {
        return true;
    }
    else {
        return false;
    }
}