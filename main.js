const loginForm = document.querySelector(".login-form");



const validateInput = (inputObj) => {
  console.log(inputObj);
  let username = inputObj.username;
  let password = inputObj.password;
  let role = inputObj.role;
  



  if (username.includes(" ") || username.trim() ==="") {
    loginForm.username.style.borderColor = "red";
    return;
  }

  if (password.includes(" ") || password.trim() ==="") {
    loginForm.password.style.borderColor = "red";
    return;
  }

  if (role.trim() === "") {
    loginForm.role.style.borderColor = "red";
    return;
  }
  alert('Username: ' + username + '\nPassword: ' + password + '\nRole: ' + role + '\n' + '\nกด OK ไปที่เว็บไซต์ : example.com');
  setTimeout(() => {
    window.location.href = "https://www.example.com";
  } , 1000);

};

const hdlLogin = (e) => {
  e.preventDefault();
  console.log(loginForm.elements);
  let allInput = loginForm.elements;
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
