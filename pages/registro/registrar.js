
//AVISO DE ERRO
function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
    return "Email já está em uso";
    }
    return error.message;
    }

//EMAIL
function onChangeEmail() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
   
    toggleRegisterButtonDisable();
}

        
function isEmailValid() {
        const email = document.getElementById("email").value;
        if (!email) {
        return false;
        }
return validateEmail(email);
        }
function validateEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
            }   
function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) { return false;
    }return validateEmail(email);
            }

//SENHA

function isPasswordValid() {
            const password = document.getElementById("password").value;
            if (!password) {
                return false;
            }
            return true;
}

function validatePasswordsMatch() {
            const password = form.password().value;
            const confirmPassword = form.confirmPassword().value;
        
            form.confirmPasswordDoesntMatchError().style.display =
                password == confirmPassword ? "none" : "block";
}

function onChangePassword() {
            const password = form.password().value;
            form.passwordRequiredError().style.display = password ? "none" : "block";
        
            form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";
        
            validatePasswordsMatch();
            toggleRegisterButtonDisable();
}
        
function onChangeConfirmPassword() {
            validatePasswordsMatch();
            toggleRegisterButtonDisable();
}
//REGISTRO
function regista(){

    const email = form.email().value;
const password = form.password().value;
firebase.auth().createUserWithEmailAndPassword(
email, password
).then(() => {
alert('conta criada com sucesso');
}).catch(error => {
alert(getErrorMessage(error));
})
   
}
//LOGIN
function login() {
        window.location.href = "../../login.html";
}

//GLOBAL
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;
}



 function toggleRegisterButtonDisable() {
        form.registerButton().disabled = !isFormValid();
    }

function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
    return false;
    }
    
    const password = form.password().value;
    if (!password || password.length < 6) {
    return false;
    }
    
    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
    return false;
    }
    
    return true;
    }
const form = {
confirmPassword: () => document.getElementById('confirmPassword'),
confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
email: () => document.getElementById('email'),
emailInvalidError: () => document.getElementById('email-invalid-error'),
emailRequiredError: () => document.getElementById('email-required-error'),
password: () => document.getElementById('password'),
passwordMinLengthError: () => document.getElementById('password-min-length-error'),
passwordRequiredError: () => document.getElementById('password-required-error'),
registerButton: () => document.getElementById('registerButton'),
registerButtonLogin: () => document.getElementById('btn_recuperar')
}


















