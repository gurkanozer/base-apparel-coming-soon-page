const form = document.querySelector('.form');
const formInputs = document.querySelectorAll(".form__input");


//VALIDATION
const setError = (name, message) => {
    const parent = document.querySelector(`#${name}`).parentElement;
    parent.classList.add("has-error");
    const messageField = parent.querySelector(".form__error");
    messageField.innerHTML = message;
}
//Regex validation
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Check email is valid
const checkEmail = (name, value) => {
    if (!isValidEmail(value)) {
        setError(name, "The email address is not formatted correctly");
        return false;
    }
    return true;
}
//Is field empty?
const checkIsEmpty = (name, value) => {
    if (value == "") {
        setError(name, `The ${name} field is empty`);
        return true;
    }
    return false;
}
form.addEventListener('submit', (e) => {
    let hasError = false;
    let formData = new FormData(form);
    for(let [name, value] of formData){
        if(!checkIsEmpty(name,value)){
            if(name === 'email')
                hasError = !checkEmail(name, value);
            //Maybe more validation...
        }
        else hasError = true;
    }
    if(hasError){ 
        console.log('..asdas.');
        e.preventDefault();
    }
    else{
        //do something...
        console.log('...');
    }
});

//LABEL POSITION
const setLabelPosition = () => {
    formInputs.forEach(formInput => {
        isEmpty(formInput);
        formInput.addEventListener("change", () => {
            isEmpty(formInput);
        });
    });
}
const isEmpty = (formInput) => {
    if (formInput.value !== "")
        formInput.classList.add("active");
    else formInput.classList.remove("active");
}
setLabelPosition();