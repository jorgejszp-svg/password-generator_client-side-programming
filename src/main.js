import './style.css'

const passwordInput = document.getElementById('password');
const securityLevel = document.getElementById('security-level');
const progressBar = document.getElementById('progress-bar');
const generateBtn = document.getElementById('generate-btn');
const toggleBtn = document.getElementById('toggle-btn');

passwordInput.addEventListener('input', (e) => {
  evaluatePassword(e.target.value);
});

generateBtn.addEventListener('click', () => {
  generatePassword();
});

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = 'Ocultar';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = 'Mostrar';
  }
});

function evaluatePassword(pass) {
  if (pass.length === 0) {
    securityLevel.textContent = "Sin evaluar";
    securityLevel.className = "";
    progressBar.style.width = "0%";
    progressBar.className = "";
    return;
  }

  let points = 0;
  if (pass.length >= 8) points++;
  if (pass.length >= 12) points++;
  if (/[A-Z]/.test(pass)) points++;
  if (/[0-9]/.test(pass)) points++;
  if (/[^A-Za-z0-9]/.test(pass)) points++;

  if (pass.length < 8 || points <= 2) {
    securityLevel.textContent = "Débil";
    securityLevel.className = "weak";
    progressBar.style.width = "33%";
    progressBar.className = "bar-weak";
  } else if (points <= 4) {
    securityLevel.textContent = "Media";
    securityLevel.className = "medium";
    progressBar.style.width = "66%";
    progressBar.className = "bar-medium";
  } else {
    securityLevel.textContent = "Fuerte";
    securityLevel.className = "strong";
    progressBar.style.width = "100%";
    progressBar.className = "bar-strong";
  }
}

function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!";
  let newPass = "";
  
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    newPass += chars[randomIndex];
  }

  passwordInput.value = newPass;
  evaluatePassword(newPass);
}