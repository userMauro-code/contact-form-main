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
    // email--------------

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
    // name--------------

    if(nameUser.value === ""){
        nameError.hidden = false;
        nameUser.setAttribute("aria-invalid", "true")
    }else{
        nameError.hidden = true;
        nameUser.setAttribute("aria-invalid", "false");
    }
    // last name--------

    if(lastNameUser.value === ""){
        lastNameUserError.hidden = false;
        lastNameUser.setAttribute("aria-invalid", "true");
    }else{
        lastNameUserError.hidden = true;
        lastNameUser.setAttribute("aria-invalid", "false");
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
        }else{
            queryError.hidden = true;
            queryType.forEach(el => el.setAttribute("aria-invalid", "false"));
        };

    // textarea----------

    if(textareaMessage.value === ""){
        textareaMessageError.hidden = false;
        textareaMessage.setAttribute("aria-invalid","true");
    }else{
        textareaMessageError.hidden = true;
        textareaMessage.setAttribute("aria-invalid", "false")
    };
    // checkbox------

    if(checkbox.checked === false){
        checkboxError.hidden = false;
        checkbox.setAttribute("aria-invalid", "true");
    }else{
        checkboxError.hidden = true;
        checkbox.setAttribute("aria-invalid", "false")
    };
})