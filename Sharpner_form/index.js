const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Load users from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach(user => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(user));
    userList.appendChild(li);
  });
});

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 sec
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    const userDetails = `${nameInput.value} : ${emailInput.value}`;
    li.appendChild(document.createTextNode(userDetails));

    // Append to UL
    userList.appendChild(li);

    // Save user details to local storage
    saveUserToLocalStorage(userDetails);

    // Clear all fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

function saveUserToLocalStorage(userDetails) {
  // Check if there are existing users in local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Add the new user details
  users.push(userDetails);

  // Save the updated array back to local storage
  localStorage.setItem('users', JSON.stringify(users));
}
