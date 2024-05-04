const inputField = document.querySelector("#password");
let outputField = document.querySelector("#output");

inputField.addEventListener("input", function () {
  const password1 = inputField.value;
  const strength = checkPasswordStrength(password1);
  outputField.innerText = strength;
});

function checkPasswordStrength(password) {
  if (password.length < 8) {
    outputField.style.color="red";
    return "Weak Password!! Try to create another one";
    
  }
  else if(/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)){
    outputField.style.color="green";
    return "Strong Password"
  }
  else if(/[A-Z]/.test(password) || /[a-z]/.test(password) || /[0-9]/.test(password)){
    outputField.style.color="yellow";
    return "Medium"
  }

}
