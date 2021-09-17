//
const taskContainer = document.querySelector('#tasks ul'),
   inputTask = document.querySelector('.input--task');

inputTask.addEventListener('keypress', function (key) {

   if (key.keyCode === 13) {

      let inputValue = inputTask.value

      if (!inputValue.trim()) return;
      addTask(inputTask.value);
   };
});
document.addEventListener('click', function (click) {

   const element = click.target;

   if (element.classList.contains('delete-task-button')) {

      deleteTask(element)
   };

   if (element.classList.contains('add-task')) {

      let inputValue = inputTask.value

      if (!inputValue.trim()) return;
      addTask(inputTask.value);
   };

   if (element.classList.contains('check-uncheck-button')) {

      checkUncheck(element);
   };
})

function createLi() {

   const li = document.createElement('li');
   return li
};

function createTaskModel(task, state) {

   const divBox = document.createElement('div'),
      newTask = document.createElement('span'),
      checkUncheckButton = document.createElement('button'),
      deleteTaskButton = document.createElement('button');

   const taskState = state;

   console.log(taskState);

   divBox.classList.add('task-box', taskState);
   newTask.classList.add('task');
   checkUncheckButton.setAttribute('class', 'check-uncheck-button');
   deleteTaskButton.classList.add('delete-task-button', 'task-button');

   taskContent = task;

   newTask.innerText = taskContent;

   divBox.appendChild(newTask);
   divBox.appendChild(checkUncheckButton);
   divBox.appendChild(deleteTaskButton);

   return divBox;
};

function clearInputTask() {

   inputTask.value = '';
   inputTask.focus();
};

function saveTask() {

   const allTasks = taskContainer.querySelectorAll('li'),
      taskList = [];


   for (let task of allTasks) {

      const span = task.querySelector('span'),
         taskContent = span.innerText;

      taskList.push(taskContent);
   }

   const tasksJSON = JSON.stringify(taskList);
   localStorage.setItem('tasks', tasksJSON);

};

function saveState() {

   const allTasks = taskContainer.querySelectorAll('li');
   const statesList = []
   let state;

   for (let task of allTasks) {

      const taskBox = task.querySelector('.task-box');

      if (taskBox.classList.contains('checked')) {

         state = 'checked';
      } else {

         state = 'unchecked';
      }

      statesList.push(state);
   }

   const stateJSON = JSON.stringify(statesList);
   localStorage.setItem('state', stateJSON);
}

function addTask(task, state) {

   const taskContent = task;

   const li = createLi();
   let taskmodel

   if (!state) {

      taskmodel = createTaskModel(taskContent, 'unchecked');
   } else {

      taskmodel = createTaskModel(taskContent, state);
   }

   li.appendChild(taskmodel);
   taskContainer.appendChild(li);

   clearInputTask();
   saveTask();
   saveState();
};

function deleteTask(element) {

   const taskbox = element.parentElement;
   taskbox.parentElement.remove();
   saveTask();
   saveState();
};

(function reAddTasks() {

   const tasks = localStorage.getItem('tasks');
   const state = localStorage.getItem('state');

   let stateList = []
   stateList = JSON.parse(state);
   let taskList = [];
   taskList = JSON.parse(tasks);

   for (let taskItem = 0; taskItem < taskList.length; taskItem++) {

      let savedTask = taskList[taskItem];
      let savedState = stateList[taskItem];

      addTask(savedTask, savedState);
   }

})();

function checkUncheck(element) {

   const task = element.parentElement;

   if (task.classList.contains('unchecked')) {

      task.classList.remove('unchecked');
      task.classList.add('checked');
      saveTask()
      saveState()
      return
   }

   if (task.classList.contains('checked')) {

      task.classList.remove('checked');
      task.classList.add('unchecked');
      saveTask();
      saveState();
      return
   }
};
