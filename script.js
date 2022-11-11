const button = document.querySelector("#submit");

function onButtonClicked(event){
    const password = document.querySelector("#password");
    const passwordConfirmation = document.querySelector("#passwordConfirmation");

    if(password.value !== passwordConfirmation.value){
        password.focus();
        password.classList.add("input-error")
        passwordConfirmation.classList.add("input-error");
    }
}

button.addEventListener("click", onButtonClicked)