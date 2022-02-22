async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (email && username && password) {
    const response = await fetch('api/users', {
      method: 'POST',
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    // check the response status
    if (response.ok) {
      console.log('Success!');
      alert('Successfully created! Now, log in.');
      return;
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
