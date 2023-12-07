const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("user_email");
const phone = document.getElementById("phone_number");
const password = document.getElementById("user_password");
const confirm_password = document.getElementById("confirm_password");

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

const isValidPhone = phone => {
    const re =  phone.replace('/[^0-9]/', '');
    return re.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/);
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirm_password.value.trim();

  if(firstNameValue === ''){
    setError(firstName, "First name is required");
  }else {
    setSuccess(firstName);
  }

  if(lastNameValue === ''){
    setError(lastName, "Last name is required");
  }else {
    setSuccess(lastName);
  }

  if(emailValue === ''){
    setError(email, "Email is required");
  }else if(!isValidEmail(emailValue)){
    setError(email, "Provide a email address")
  } else {
    setSuccess(email);
  }

  if(phoneValue === ''){
    setError(phone, "Phone number is required");
  }else if(!isValidPhone(phoneValue)){
    setError(phone, "Invalid phone format")
  } else {
    setSuccess(phone);
  }

  if(passwordValue === ''){
    setError(password, "Password is required");
  } else if(passwordValue.length < 8){
    setError(password, "Password must be at least 8 character.")
  } else {
    setSuccess(password);
  }

  if(confirmPasswordValue === ''){
    setError(confirm_password, 'Please confirm your password');
  } else if (confirmPasswordValue !== passwordValue){
    setError(confirm_password, "Passwords doesn't match");
  } else {
    setSuccess(confirm_password);
  }
};
