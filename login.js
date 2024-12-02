

//VUE ROUTER
name: 'Login',
//LOGIN-AVISOS
//para chamar
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
    }
//email
function toggleEmailErrors(){
    //desaparecendo email.
  const email = form.email().value;
if (!email) {
    document.getElementById("email-required-error").style.display = "block";
} else {
    document.getElementById("email-required-error").style.display = "none";
}

if (validateEmail(email)) {
    document.getElementById("email-invalid-error").style.display = "none";
} else {
    document.getElementById("email-invalid-error").style.display = "block";
}
}

//para chamar
function onChangePassword() {
toggleButtonsDisable();
togglePasswordErrors();
} 
//password
function togglePasswordErrors() {
const password = form.password().value;
if (!password) {
 document.getElementById("password-required-error").style.display = "block";
} else {
 document.getElementById("password-required-error").style.display = "none";
}
}


//LOGIN-BTN-LOGIN
function getErrorMessage(error) {
    return "Usuário nao encontrado";
}
function login() {
  //hideLoading();
     firebase.auth().signInWithEmailAndPassword(
   form.email().value, form.password().value
).then(response => {
    // hideLoading();
    alert("usuario encontrado")
    window.location.href = "pages/home/home.html";
}).catch(error => {
   // hideLoading();
    alert(getErrorMessage(error));
});  
    }
  
//LOGIN-BTN-RECUPERARSENHA
//btn Recupera Senha
function validateFields(){
   toggleButtonsDisable();
   toggleEmailErrors();
}

function recoverPassword(){
  //  showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() =>{
//hideLoading();
        alert('email enviado com sucesso');
    }).catch(error => {
       // hideLoading();
        alert(getErrorMessage(error))
    });
}
//LOGIN-BTN-CRIARCONTA
    function registre(){
       window.location.href = "pages/registro/registrar.html";
       showLoading();
    }

  

//GLOBAL

//Para ver ser o email é valido
function validateEmail(email) {
return /\S+@\S+\.\S+/.test(email);
}

//para ver se o campo de email é valiso
function isEmailValid() {
const email = form.email().value;
if (!email) {
    return false;
}
return validateEmail(email);
}

//validar o campo senha
function isPasswordValid() {
const password = document.getElementById("password").value;
if (!password) {
    return false;
}
return true;
}

//para desabilitar buttons
function toggleButtonsDisable(){
// FOI COLOCADO TUDO DO FILDS AQUI  
  const emailValid = isEmailValid();
  document.getElementById("recover-password-button").disabled = !emailValid;

  const passwordValid = isPasswordValid();
  document.getElementById("login-button").disabled = !emailValid || !passwordValid;
}
//para refatora o codido9PREGUIÇAA
  const form = {
email: () => document.getElementById("email"),
emailInvalidError: () => document.getElementById("email-invalid-error"),
emailRequiredError: () => document.getElementById("email-required-error"),
loginButton: () => document.getElementById("login-button"),
password: () => document.getElementById("password"),
passwordRequiredError: () => document.getElementById("password-required-error"),
recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 

//FIREBASE

 
