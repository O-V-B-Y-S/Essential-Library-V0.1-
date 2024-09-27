document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const signinBtn = document.querySelector('#signinForm');
    const signupBtn = document.querySelector('#signupForm');

    // Check localStorage to auto-login if the user is already signed up
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        alert('Welcome back, ' + localStorage.getItem('username') + '!');
        window.location.href = 'main.html'; // Redirect to main page after successful login
    }

    // Switch to register form when the register link is clicked
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    // Switch back to login form when the login link is clicked
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Simulate login form submission
    signinBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const email = document.querySelector('#signupEmail').value;
        const password = document.querySelector('#signupPassword').value;

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'main.html'; // Redirect to main page
        } else {
            alert('Invalid login credentials!');
        }
    });

    // Simulate registration form submission
    signupBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const username = document.querySelector('#signupUsername').value;
        const email = document.querySelector('#signupEmail').value;
        const password = document.querySelector('#signupPassword').value;

        // Store the credentials in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Registration successful! Please log in.');
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });
});
