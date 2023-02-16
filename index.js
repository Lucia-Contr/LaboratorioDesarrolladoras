function validateName() {
  var nameField = document.getElementById("name");
  var validName = /^[A-Za-z\s]+$/;
  var errorName = document.getElementById("nameError");

  if (nameField.value.length == 0) {
    errorName.innerHTML = "Rellene este campo";
    nameField.classList.add("invalid");
    return false;
  } else if (validName.test(nameField.value)) {
      nameField.classList.add("valid");
    nameField.classList.remove("invalid");
    errorName.innerHTML = "";
    return true;
  } else {
    errorName.innerHTML = "Nombre inválido";
    nameField.classList.add("invalid");
    return false;
  }
}
function validateEmail() {
  var emailField = document.getElementById("email");
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  var errorEmail = document.getElementById("emailError");

  if (emailField.value.length == 0) {
    errorEmail.innerHTML = "Rellene este campo";
    emailField.classList.add("invalid");
    return false;
  } else if (validEmail.test(emailField.value)) {
    emailField.classList.remove("invalid");
    errorEmail.innerHTML = "";
    emailField.classList.add("valid");
    return true;
  } else {
    errorEmail.innerHTML = "Email Inválido";
    emailField.classList.add("invalid");
    return false;
  }

}

function validatePassword() {
  var passwordField = document.getElementById("password");
  var errorPassword = document.getElementById("passwordError");

  if (passwordField.value.length == 0) {
    errorPassword.innerHTML = "Rellene este campo";
    passwordField.classList.add("invalid");
    return false;
  } else if (passwordField.value.length <= 8) {
    passwordField.classList.remove("invalid");
    errorPassword.innerHTML = "";
    passwordField.classList.add("valid");
    validatePassword2();
    return true;
  } else {
    errorPassword.innerHTML = "No debe tener más de 8 caracteres";
    passwordField.classList.add("invalid");
    return false;
  }
}

function validatePassword2() {
  var passwordField = document.getElementById("password");
  var password2Field = document.getElementById("password2");
  var errorPassword2 = document.getElementById("password2Error");

  if (password2Field.value.length == 0) {
    errorPassword2.innerHTML = "Rellene este campo";
    password2Field.classList.add("invalid");
    return false;
  } else if (passwordField.value == password2Field.value) {
    password2Field.classList.remove("invalid");
    errorPassword2.innerHTML = "";
    password2Field.classList.add("valid");
    return true;
  } else {
    errorPassword2.innerHTML = "Las contraseñas no coinciden";
    password2Field.classList.add("invalid");
    return false;
  }
}

function validateForm() {
  if (
    validateName() &&
    validateEmail() && 
    validatePassword() &&
    validatePassword2()
  ) {
    alert("La inscripción ha sido correcta");
    return true;
  } else {
    return false;
  }
}
