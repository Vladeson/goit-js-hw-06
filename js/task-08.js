document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let emailInput = document.querySelector('input[name="email"]');
  let passwordInput = document.querySelector('input[name="password"]');

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Будь ласка, заповніть усі поля.');
    return;
  }

  let formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData);

  this.reset();
});