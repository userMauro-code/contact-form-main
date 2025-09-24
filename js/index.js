const formulario = document.querySelector(".content__card");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("error-email");
const nameUser = document.getElementById("first__name");
const nameError = document.getElementById("error-first-name");
const lastNameUser = document.getElementById("last__name");
const lastNameUserError = document.getElementById("error-last-name");
const queryType = document.querySelectorAll('input[name=query]');
const queryError = document.getElementById("error-query");
const textareaMessage = document.getElementById("textarea");
const textareaMessageError = document.getElementById("error-textarea");
const checkbox = document.getElementById("checkbox__btn");
const checkboxError = document.getElementById("error-checkbox");




formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    let isValid = true;

    // email--------------

    if(emailInput.value === ""){
        emailError.textContent = "this fiel is required";
        emailError.hidden = false;
        emailInput.setAttribute("aria-invalid", "true");
        emailInput.classList.add("input__error");
        isValid = false
    }else if(emailInput.checkValidity() === false) {
        emailError.textContent = "Please enter a valid email address";
        emailError.hidden = false;
        emailInput.classList.add("input__error");
        emailInput.setAttribute("aria-invalid", "true");
        isValid = false
    }else {
        emailError.hidden = true;
        emailInput.setAttribute("aria-invalid", "false");
        emailInput.classList.remove("input__error");
    }
    // name--------------

    if(nameUser.value === ""){
        nameError.hidden = false;
        nameUser.setAttribute("aria-invalid", "true");
        nameUser.classList.add("input__error");
        isValid = false;
    }else{
        nameError.hidden = true;
        nameUser.setAttribute("aria-invalid", "false");
        nameUser.classList.remove("input__error");
    }
    // last name--------

    if(lastNameUser.value === ""){
        lastNameUserError.hidden = false;
        lastNameUser.setAttribute("aria-invalid", "true");
        lastNameUser.classList.add("input__error");
        isValid = false;
    }else{
        lastNameUserError.hidden = true;
        lastNameUser.setAttribute("aria-invalid", "false");
        lastNameUser.classList.remove("input__error");
    };
    // query Type-------
    
    let queryTypeSelect = false;

    queryType.forEach( Element => {

        if(Element.checked){
            queryTypeSelect = true
        }    
    });
    if(queryTypeSelect === false){
            queryError.hidden = false;
            queryType.forEach( el => el.setAttribute("aria-invalid", "true"));
            isValid = false;
        }else{
            queryError.hidden = true;
            queryType.forEach(el => el.setAttribute("aria-invalid", "false"));
        };

    // textarea----------

    if(textareaMessage.value === ""){
        textareaMessageError.hidden = false;
        textareaMessage.setAttribute("aria-invalid","true");
        textareaMessage.classList.add("input__error");
        isValid = false;
    }else{
        textareaMessageError.hidden = true;
        textareaMessage.setAttribute("aria-invalid", "false");
        textareaMessage.classList.remove("input__error");
    };
    // checkbox------

    if(checkbox.checked === false){
        checkboxError.hidden = false;
        checkbox.setAttribute("aria-invalid", "true");
        isValid = false;
    }else{
        checkboxError.hidden = true;
        checkbox.setAttribute("aria-invalid", "false")
    };

    // succes message-----------
   if(isValid) {
    const mesagge = document.getElementById("success-mesagge").hidden = false;
    formulario.reset();
    mesagge.style.display = "flex";
   }
})