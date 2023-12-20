const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const editForm = document.querySelector('#edit-form');
const editNameInput = document.querySelector('#edit-name');
const editEmailInput = document.querySelector('#edit-email');

// Load users from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.forEach(user => {
    addUserToList(user);
  });
});

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// Listen for edit form submit
editForm.addEventListener('submit', onEditSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    displayMessage('Please enter all fields', 'error');
  } else {
    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user details to the existing list
    const newUser = { id: Date.now(), name: nameInput.value, email: emailInput.value };
    users.push(newUser);

    //AXiosu POST
    // axios.post("https://crudcrud.com/api/ceedef30a56f407a81f17e898d0238bd/appointmentData",users)
    // .then((response)=>{
    //   console.log(response);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  
    const apiUrl = 'http://crudcrud.com/api/appointmentData';

axios.post(apiUrl, users)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


    // Save the updated list back to local storage
    // localStorage.setItem('users', JSON.stringify(users));

    // Display the new user in the list
    addUserToList(newUser);

    // Clear all fields
    clearFields();
       // Use CORS Anywhere proxy for the Axios request
     
  }
}

function onEditSubmit(e) {
  e.preventDefault();

//   const userId = editForm.getAttribute('data-edit-id');
  const userId = parseInt(editForm.getAttribute('data-edit-id'), 10);
    
  const users = JSON.parse(localStorage.getItem('users')) || [];
    


  // Find the user in the array by ID
  const userIndex = users.findIndex(user => user.id === userId);

  

  if (userIndex !== -1) {
    console.log("Updating user details");
    // Update the user details
    users[userIndex].name = editNameInput.value;
    users[userIndex].email = editEmailInput.value;

    // Save the updated list back to local storage
    localStorage.setItem('users', JSON.stringify(users));
    
    
    // Update the UI
    updateUserInList(userId, users[userIndex]);

    // Clear the edit form
    clearEditForm();
  }else{
    console.error("User not found");
  }
}

function updateUserInList(userId, updatedUser) {
    const listItem = document.querySelector(`[data-id="${userId}"]`);
    
    if (listItem) {
      // Update the text content of the list item
      listItem.textContent = `${updatedUser.name}: ${updatedUser.email}`;
    }
  }
  

function displayMessage(message, className) {
  msg.classList.add(className);
  msg.innerHTML = message;

  // Remove error after 3 sec
  setTimeout(() => {
    msg.innerHTML = '';
    msg.classList.remove(className);
  }, 3000);
}

function addUserToList(user) {
  const li = document.createElement('li');
  li.setAttribute('data-id', user.id);

  li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

  // Create edit and delete buttons
  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.className = 'edit-button';
  editButton.addEventListener('click', () => editUser(user.id));

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', () => deleteUser(user.id));

  li.appendChild(editButton);
  li.appendChild(deleteButton);
  userList.appendChild(li);
}

function editUser(userId) {
    const user = getUserById(userId);
    // Ensure that the edit form and its input elements are correctly selected
    const editForm = document.querySelector('#edit-form');
    const editNameInput = document.querySelector('#edit-name');
    const editEmailInput = document.querySelector('#edit-email');
  
    // Toggle the visibility of the edit form
    if (editForm && editNameInput && editEmailInput) {
        const computedStyle = window.getComputedStyle(editForm);

      if (computedStyle.display === 'none' || computedStyle.display === '') {
        // If the form is hidden, show it and populate with user details
        editForm.style.display = 'block';
        editNameInput.value = user.name;
        editEmailInput.value = user.email;
  
        // Set the user ID as a data attribute in the edit form
        editForm.setAttribute('data-edit-id', userId);
      } else {
        // If the form is visible, hide it
        editForm.style.display = 'none';
        clearEditForm();
      }
    } else {
      console.error("Edit form or its input elements not found.");
    }
  }
  
  function clearEditForm() {
    const editForm = document.querySelector('#edit-form');
    const editNameInput = document.querySelector('#edit-name');
    const editEmailInput = document.querySelector('#edit-email');
  
    // Clear the edit form
    if (editForm && editNameInput && editEmailInput) {
      editForm.removeAttribute('data-edit-id');
      editNameInput.value = '';
      editEmailInput.value = '';
    }
  }
  

function deleteUser(userId) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const updatedUsers = users.filter(user => user.id !== userId);
  localStorage.setItem('users', JSON.stringify(updatedUsers));

  const listItem = document.querySelector(`[data-id="${userId}"]`);
  if (listItem) {
    listItem.remove();
  }
}

function getUserById(userId) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(user => user.id === userId);
}

function clearFields() {
  nameInput.value = '';
  emailInput.value = '';
}

function clearEditForm() {
  editNameInput.value = '';
  editEmailInput.value = '';
  editForm.removeAttribute('data-edit-id');
}




