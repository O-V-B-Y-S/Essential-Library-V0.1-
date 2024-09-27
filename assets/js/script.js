
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');
const btnPopUp=document.querySelector('.btn-login');
const closeBtn=document.querySelector('.icon-close')

// registerLink.addEventListener('click', function(event) {
//     event.preventDefault();  
//     wrapper.classList.add('active'); 
// });
loginLink.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.remove('active'); 
});
registerLink.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.add('active'); 
});
btnPopUp.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.add('active-popup'); 
});
closeBtn.addEventListener('click', function(event) {
    event.preventDefault();  
    wrapper.classList.remove('active-popup'); 
});





document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    // Store user data in local storage
    localStorage.setItem(email, password);
    // document.getElementById('message').textContent = 'Sign Up Successful!';
    document.getElementById('signupForm').reset();
});
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;
    // Retrieve user data from local storage
    const storedPassword = localStorage.getItem(email);
    if (storedPassword && storedPassword === password) {
        document.getElementById('message').textContent = 'Sign In Successful!';
        window.location.href='./main.html'
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
    document.getElementById('signinForm').reset();
});