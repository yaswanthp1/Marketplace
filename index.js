(function (){
  localStorage.setItem('wishList', JSON.stringify([]));       // Converts the data stored to string format
})


function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //"user" input credentials
  if (username == "user" && password == "user") {
    location.href = "/home/home.html";
   
  //"seller" credentials input
  } else if (username == "seller" && password == "seller") {
    location.href = "/seller/seller.html";
  }
  //False input
  else{
    alert("Invalid Credentials");
  }
}

// After Sign up
function register() {
  location.href = "/registration/registration.html";
}


// Validating input for all the Registration fields
function signup(){
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let re_pass = document.getElementById('re_pass');
  let terms = document.getElementById('agree-term');

  // Check username format
  const userRegex = /^[a-zA-Z]{5,}$/;
  if (!userRegex.test(name.value)) {
    alert('Username should only contain letters and at least 5 characters');
    return;
  }
  
  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert('Invalid email address');
    return;
  }

  // Check password patterne
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    alert('Password must contain at least one number, one special character, one capital letter, and be at least 8 characters long');
    return;
  }
  
  // Check password match
  if (password.value !== re_pass.value) {
    alert('Passwords do not match');
    return;
  }
  if (!terms.checked) {
    alert("Please agree to the terms of service.");
    return;
  }
  // All validations passed
  alert('Account created successfully');
  window.location.href = '/home/home.html';
}

// Validates and toggles between a check and cross mark for username field
function validateUsername() {
  let username = document.getElementById('name');
  let usernameIcon = document.getElementById('username-icon');
  const userRegex = /^[a-zA-Z]{5,}$/;
  if (!userRegex.test(username.value)) {
    usernameIcon.style.display = 'inline-block';
    usernameIcon.classList.toggle("fa-check", false);
    usernameIcon.classList.toggle("fa-times", true);
    usernameIcon.style.color = "red";      
  } else {
    usernameIcon.style.display = 'inline-block';
    usernameIcon.classList.toggle("fa-check", true);
    usernameIcon.classList.toggle("fa-times", false);
    usernameIcon.style.color = "green";
  }
}

// Validates and toggles between a check and cross mark for email field
function validateEmail(){
  let email = document.getElementById('email');
  let emailIcon = document.getElementById('email-icon');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)){
    emailIcon.style.display = 'inline-block';
    emailIcon.classList.toggle("fa-check", false);
    emailIcon.classList.toggle("fa-times", true);
    emailIcon.style.color = "red";
  }
  else{
    emailIcon.style.display = 'inline-block';
    emailIcon.classList.toggle("fa-check", true);
    emailIcon.classList.toggle("fa-times", false);
    emailIcon.style.color = "green";
  }
}

// Validates and toggles between a check and cross mark for password field
function validatePassword(){
  let password = document.getElementById('password');
  let passwordIcon = document.getElementById('password-icon');
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password.value)){
    passwordIcon.style.display = 'inline-block';
    passwordIcon.classList.toggle("fa-check", false);
    passwordIcon.classList.toggle("fa-times", true);
    passwordIcon.style.color = "red";
  }
  else{
    passwordIcon.style.display = 'inline-block';
    passwordIcon.classList.toggle("fa-check", true);
    passwordIcon.classList.toggle("fa-times", false);
    passwordIcon.style.color = "green";
  }

  // Once the criteria is met turns the corresponding criteria to green
  const passwordInput = document.getElementById('password');
  const eightCharIcon = document.getElementById('eight-char');
  const uppercaseIcon = document.getElementById('uppercase');
  const lowercaseIcon = document.getElementById('lowercase');
  const specialCharIcon = document.getElementById('special-char');
  const numberIcon = document.getElementById('number');
  const pass = passwordInput.value;
  if (pass.length >= 8) {
    eightCharIcon.classList.add('fa-check');
  } else {
    eightCharIcon.classList.remove('fa-check');
  }

  if (/[A-Z]/.test(pass)) {
    uppercaseIcon.classList.add('fa-check');
  } else {
    uppercaseIcon.classList.remove('fa-check');
  }

  if (/[a-z]/.test(pass)) {
    lowercaseIcon.classList.add('fa-check');
  } else {
    lowercaseIcon.classList.remove('fa-check');
  }

  if (/[^A-Za-z0-9]/.test(pass)) {
    specialCharIcon.classList.add('fa-check');
  } else {
    specialCharIcon.classList.remove('fa-check');
  }

  if(/[0-9]/.test(pass)){
    numberIcon.classList.add('fa-check');
  } else {
    numberIcon.classList.remove('fa-check');
  }
}

// Validates and toggles between a check and cross mark for reenter password field
function validateRepassword(){
  let repassword = document.getElementById('re_pass');
  let repasswordIcon = document.getElementById('repassword-icon');
  let password = document.getElementById('password');
  if (repassword.value == null || password.value !== repassword.value){
    repasswordIcon.style.display = 'inline-block';
    repasswordIcon.classList.toggle("fa-check", false);
    repasswordIcon.classList.toggle("fa-times", true);
    repasswordIcon.style.color = "red";
  }
  else{
    repasswordIcon.style.display = 'inline-block';
    repasswordIcon.classList.toggle("fa-check", true);
    repasswordIcon.classList.toggle("fa-times", false);
    repasswordIcon.style.color = "green";
  }
}

// Functions for show password button for password field 
function togglePasswordVisibility() {
  let passwordInput = document.getElementById("password");
  let showPassword = document.getElementById("show-password");
  let passwordVisibility = passwordInput.getAttribute("type");
  if (passwordVisibility === "password") {
    passwordInput.setAttribute("type", "text");
    showPassword.innerHTML = '<i class="fas fa-eye-slash"></i> Hide';
  } else {
    passwordInput.setAttribute("type", "password");
    showPassword.innerHTML = '<i class="fas fa-eye"></i> Show';
  }
}

// Functions for show password button for reenter password field
function toggleRePasswordVisibility() {
  let passwordInput = document.getElementById("re_pass");
  let showPassword = document.getElementById("show-repassword");
  let passwordVisibility = passwordInput.getAttribute("type");
  if (passwordVisibility === "password") {
    passwordInput.setAttribute("type", "text");
    showPassword.innerHTML = '<i class="fas fa-eye-slash"></i> Hide';
  } else {
    passwordInput.setAttribute("type", "password");
    showPassword.innerHTML = '<i class="fas fa-eye"></i> Show';
  }
}