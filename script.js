function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn= document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');


    if (formType === 'login') {
        loginForm.classList.add('active')
        signupForm.classList.remove('active');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');

    } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    }
}

function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const emailError = document.getElementById('login-emailerror');
    const passwordError = document.getElementById('login-passworderror');
    let isValid = true;

    emailError.textContent = '';
    passwordError.textContent = '';

    // Better email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email (like name@place.com)';
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    if (isValid) {
        console.log('Login in Successful');
    }
    return isValid;
}

//validate signup
function validateSignup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const emailError = document.getElementById('signup-emailerror');
    const passwordError = document.getElementById('signup-passworderror');
    const confirmpassworderror = document.getElementById('signup-confirmpassworderror');
    let isValid = true;


    emailError.textContent = '';
    passwordError.textContent = '';
    confirmpassworderror.textContent = '';

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email (like name@place.com)';
        isValid = false;
    }

    // Stronger password check
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Password needs 6+ characters, 1 uppercase, 1 number, 1 special character (!@#$%^&*)';
        isValid = false;
    }
    if (password !== confirmPassword) {
        confirmpassworderror.textContent = 'Passwords do not match';
        isValid = false;
    }
    if (isValid) {
        console.log('Signed in Successfully');
    }
    return isValid;



}
