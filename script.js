const themeBtn = document.getElementById('theme-btn');
const form = document.getElementById('registration-form');
const message = document.getElementById('message');
const outerDiv = document.getElementById('outer-div');
const innerBtn = document.getElementById('inner-btn');
const resetBtn = document.getElementById('reset-btn');


themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Bubbling event listeners (default)
innerBtn.addEventListener('click', (e) => {
  console.log('Button Clicked');
  // e.stopPropagation(); 
});

outerDiv.addEventListener('click', () => {
  console.log('Div Clicked');
});

// Capturing event listeners (with capture: true)
innerBtn.addEventListener('click', () => {
  console.log('Button Clicked (capturing)');
}, true);

outerDiv.addEventListener('click', () => {
  console.log('Div Clicked (capturing)');
}, true);

// Form validation function
function validateForm() {
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (username.length < 3) {
    showMessage('Username must be at least 3 characters.', 'error');
    return false;
  }
  if (!email.includes('@')) {
    showMessage('Email must contain @ symbol.', 'error');
    return false;
  }
  if (password.length < 6) {
    showMessage('Password must be at least 6 characters.', 'error');
    return false;
  }
  showMessage('Registration successful!', 'success');
  return true;
}

// Show dynamic message with color + text
function showMessage(msg, type) {
  message.textContent = msg;
  message.className = type;
}

// Form submission event
form.addEventListener('submit', e => {
  e.preventDefault();
  validateForm();
});

// Reset button event clears form inputs and messages
resetBtn.addEventListener('click', () => {
  form.reset();
  message.textContent = '';
  message.className = '';
});

// Bonus: Real-time validation while typing
form.username.addEventListener('input', () => {
  if (form.username.value.trim().length >= 3) {
    showMessage('', '');
  } else {
    showMessage('Username must be at least 3 characters.', 'error');
  }
});
form.email.addEventListener('input', () => {
  if (form.email.value.includes('@')) {
    showMessage('', '');
  } else {
    showMessage('Email must contain @ symbol.', 'error');
  }
});
form.password.addEventListener('input', () => {
  if (form.password.value.length >= 6) {
    showMessage('', '');
  } else {
    showMessage('Password must be at least 6 characters.', 'error');
  }
});
