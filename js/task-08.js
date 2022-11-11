const form = document.querySelector('.login-form');

const checkEvent = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const inputData = { email: email.value, password: password.value };
  console.log(inputData);
  event.currentTarget.reset();
};

form.addEventListener('submit', checkEvent);
