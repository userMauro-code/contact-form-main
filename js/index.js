const formulario = document.querySelector(".content__card");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("error-email");

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();

    if(emailInput.value === ""){
        emailError.textContent = "this fiel is required";
        emailError.hidden = false;
        emailInput.setAttribute("aria-invalid", "true");
    }else if(emailInput.checkValidity() === false) {
        emailError.textContent = "Please enter a valid email address";
        emailError.hidden = false;
        emailInput.setAttribute("aria-invalid", "true");
    }else {
        emailError.hidden = true;
        emailInput.setAttribute("aria-invalid", "false");
    }
})