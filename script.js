const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const invalidText = document.querySelector("#invalid-text");
const validText = document.querySelector("#valid-text");

function validEmail(event){
    event.preventDefault();
    if(email.validity.valid && email.value !== ""){
        email.style.borderColor = "#2ECC71";
        invalidText.style.display = "none";
        validText.style.display = "block";
        submit.className = submit.className + "move";  
        submit.disabled = true; 
        email.value = "";
    } 
    else{
        email.style.borderColor = "#ff5466";
        invalidText.style.display = "block";
        validText.style.display = "none";
        submit.className = submit.className + "move";  
        submit.disabled = true; 
    }
}

submit.addEventListener('click', validEmail);