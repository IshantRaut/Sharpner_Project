const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Load users from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach(user => {
    addUserToList(user);
  });
});

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
      displayMessage('Please enter all field','error');
  } else {
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user details to the existing list
    const newUser = { name: nameInput.value, email: emailInput.value };
    users.push(newUser);

    // Save the updated list back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Display the new user in the list
    addUserToList(newUser);

    // Clear all fields
    clearFields();

}
}


function displayMessage(message, className){
    msg.classList.add(className);
    msg.innerHTML = message;

    //Remove error after 3sec
    setTimeout(() => {
        msg.innerHTML='';
        msg.classList.remove(className);
    },3000);
}
function addUserToList(user) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
    userList.appendChild(li);
  }
  
  function clearFields() {
    nameInput.value = '';
    emailInput.value = '';
  }

