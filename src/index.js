document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let subForm = document.getElementById('create-task-form');
  let formElements = document.getElementsByTagName('input');
  let textField = formElements[0];
  let taskList = document.getElementById('tasks');

  subForm.addEventListener('submit', (e) => {
    
    let enteredText = textField.value;
    let newTask = document.createElement('li');
    newTask.textContent = enteredText;
    taskList.appendChild(newTask);

    e.preventDefault();
    
  })
});
