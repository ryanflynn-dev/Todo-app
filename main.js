const form = document.querySelector('form'); // Getting the form from the DOM and creating a variable
const input = document.querySelector('input');  // Getting the input from the DOM and creating a variable
const taskList = document.querySelector('#task-list');  // Getting the task-list from the DOM and creating a variable

// Add tasks

if (form) { // Checking if the form is available
form.addEventListener('submit', (event) => {    // Listening for the event of submit on the 'form' variable declared earlier
event.preventDefault();    // Preventing the default action of this event/button
const task = input.value; // Creating a variable called task and making it use the value inside the input (the text entered by the user)
addTask(task); // Initiating the function (addTask) which is defined below
input.value = ''; // Setting the input value back to nothing (otherwise the text entered by the user stays there)
});
}

function addTask(task) { // Creating a function called addTask with the argument (task)
if (taskList) { // Checking if the taskList is available
const li = document.createElement('li'); // Grabbing the list item from the DOM and creating a variable
li.innerHTML = task + '<button class="edit-button">Edit</button>' + '<button class="delete-button">x</button>'; // Changing the innerHTML in the list item to reflect the task (input from the user) 
taskList.appendChild(li); // Adding a new element 'li' to the taskList


// Updating and deleting tasks

  let deleteButton = li.querySelector('.delete-button');
  let editButton = li.querySelector('.edit-button');

  // ^^ deleteButton and editButton both reference elements with the classes "delete-button" and "edit-button", respectively, that are descendants of the li element. These variables can be used later in the code to perform actions on the elements they reference, such as adding event listeners or changing their properties ^^

  deleteButton.addEventListener('click', () => { //listening for a click event on the 'deleteButton' variable decalred above
    taskList.removeChild(li); // Removing the element 'li' from the taskList
  });

  editButton.addEventListener('click', () => { // listening for a click event on the 'editButton' variable declared above
    const form = document.createElement('form'); // Creating a variable form, using the element 'form' from the DOM
    form.innerHTML = '<input type="text" value=""><button type="submit">Save</button>'; // Replacing the standard form HTML with an input and button
    li.innerHTML = ''; // Clearing the form
    li.appendChild(form); // Adding a list item to the form

    form.addEventListener('submit', (event) => { // Listening for the event of submit on the 'form' variable declared earlier
      event.preventDefault();  // Preventing the default action of this event/button
      const updatedTask = form.querySelector('input').value;  // Creating a variable called updateTask and making it use the value inside the input (the text entered by the user)
      li.innerHTML = updatedTask + '<button class="edit-button">Edit</button><button class="delete-button">x</button>'; // Using the value from 'updatedTask' above and adding in a new edit and delete button in the html
      deleteButton = li.querySelector('.delete-button'); // Adding the variable deleteButton again
      editButton = li.querySelector('.edit-button'); // Adding the variable editButton again

      deleteButton.addEventListener('click', () => { //listening for a click event on the 'deleteButton' variable decalred above
        taskList.removeChild(li);  // Removing the element 'li' from the taskList
      });

      editButton.addEventListener('click', () => {  // listening for a click event on the 'editButton' variable declared above
        form.innerHTML = '<input type="text" value=""><button type="submit">Save</button>';  // Replacing the standard form HTML with an input and button
        li.innerHTML = '';  // Clearing the form
        li.appendChild(form); // Adding a list item to the form
      });
    });
  });
}
}

// Reset tasks

form.addEventListener('reset', (event) => { // Listening for the reset event on the 'form' variable
event.preventDefault(); // Preventing the defaut action for the event
input.value = ''; // Making the input value empty
while (taskList.firstChild) { // Starts a while loop, the loop continues to execute as long as there is a first child of a task-list element
taskList.removeChild(taskList.firstChild); // This is what is happening inside the while loop, removing the firstChild until there are no more
}
})