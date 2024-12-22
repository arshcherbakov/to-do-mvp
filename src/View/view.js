const eventManager = new Map();

const createTaskView = (task, deleteOneTask, editTask) => {
  const buttonDelete = document.createElement('button');
  buttonDelete.className = 'delete-button';
  buttonDelete.style = 'height: 20px';
  buttonDelete.textContent = 'Удалить';

  const buttonEdit = document.createElement('button');
  buttonEdit.className = 'edit-button';
  buttonEdit.style = 'height: 20px';
  buttonEdit.textContent = 'Изменить';

  const li = document.createElement('li');

  li.id = task.id;
  li.style = 'display: flex; align-items: center; gap: 10px;';
  li.innerHTML = `
    <p class="description-text">${task.description}</p>
  `;
  li.append(buttonDelete);
  li.append(buttonEdit);

  const editOneTask = () => editTask(task.id);
  const deleteTask = () => deleteOneTask(task.id);

  eventManager.set(`${task.id}-edit`, editOneTask);
  eventManager.set(`${task.id}-delete`, deleteTask);

  buttonDelete.addEventListener('click', deleteTask);
  buttonEdit.addEventListener('click', editOneTask);

  return li;
};

export const showAllTasks = (listTasks, deleteOneTask, editTask) => {
  const elemetList = document.getElementsByClassName('task-list')[0];

  listTasks.forEach(task => {
    const createdViewTask = createTaskView(task, deleteOneTask, editTask);
    elemetList.appendChild(createdViewTask);
  });
};

export const getDescriptionFromInput = () => {
  const searchInputElemet = document.getElementsByClassName('search-input')[0];

  return searchInputElemet.value;
};

export const getIdTask = index => {
  const buttonDelete = document.getElementsByClassName('delete-button')[index];

  if (buttonDelete) {
    const liElement = buttonDelete.closest('li');

    return liElement.id;
  }

  return null;
};

export const addTask = task => {
  const elemetList = document.getElementsByClassName('task-list')[0];

  const createdViewTask = createTaskView(task, deleteOneTask, editTask);
  elemetList.append(createdViewTask);

  const searchInputElemet = document.getElementsByClassName('search-input')[0];
  searchInputElemet.value = '';
};

export const deleteTaskView = (taskId, nameEvent) => {
  const taskElement = document.getElementById(taskId);
  taskElement.getElementsByClassName('button-edit');

  taskElement.removeEventListener(nameEvent, eventManager.get(taskId));
  taskElement.parentNode.removeChild(taskElement);

  eventManager.delete(`${task.id}-edit`);
  eventManager.delete(`${task.id}-delete`);
};

export const getEditedDescriptionTask = () => {
  const editInput = document.getElementsByClassName('edit-input')[0];

  return editInput.value;
};

export const saveEditView = (taskId, editedTask) => {
  const taskElement = document.getElementById(taskId);

  taskElement.innerHTML = `
    <p class="description-text">${editedTask.description}</p>
    <button class="delete-button" style="height: 20px">Удалить</button>
    <button class="edit-button" style="height: 20px">Изменить</button>
  `;
};

const createEditTaskView = (textTask, taskElement, taskId) => {
  const buttonCancel = document.createElement('button');
  buttonCancel.className = 'button-cancel-edit';
  buttonCancel.style = 'height: 20px';
  buttonCancel.textContent = 'Отмена';

  const buttonSave = document.createElement('button');
  buttonSave.className = 'button-save-edit';
  buttonSave.style = 'height: 20px';
  buttonSave.textContent = 'Сохранить';

  taskElement.innerHTML = `
    <input class="edit-input" placeholder="Название задачи" value="${textTask}" />
  `;
  taskElement.append(buttonCancel);
  taskElement.append(buttonSave);

  const cancelEditing = () =>
    cancelEditingView({ id: taskId, description: textTask }, taskElement);
  const saveEdit = () => saveEditView();

  buttonCancel.addEventListener('click', cancelEditing);
  buttonSave.addEventListener('click', saveEdit);
};

export const editTaskView = taskId => {
  const taskElement = document.getElementById(taskId);
  const textElement = taskElement.getElementsByTagName('p')[0];
  const buttons = taskElement.getElementsByTagName('button');

  const textTask = textElement.textContent;

  taskElement.removeChild(textElement);
  taskElement.removeChild(buttons[1]);
  taskElement.removeChild(buttons[0]);

  createEditTaskView(textTask, taskElement);

  // return textTask;
};

export const cancelEditingView = (oldDataTask, taskElement) => {
  const buttons = taskElement.getElementsByTagName('button');
  const input = taskElement.getElementsByTagName('input')[0];

  taskElement.removeChild(input);
  taskElement.removeChild(buttons[1]);
  taskElement.removeChild(buttons[0]);

  const taskView = createTaskView(
    oldDataTask,
    eventManager.get(`${oldDataTask.id}-delete`),
    eventManager.get(`${oldDataTask.id}-edit`),
  );

  taskElement.append(taskView);
};

export const deleteAllTaskView = () => {
  const listElementsTasks = document.getElementsByTagName('li');
  console.log(listElementsTasks);

  for (let i = 0; i < listElementsTasks.length; i++) {
    listElementsTasks[i].removeEventListener('click', eventManager.get(i));
    listElementsTasks[i].parentNode.removeChild(listElementsTasks[i]);
  }
};

export const bindAddButton = addOneTask => {
  const buttonAdd = document.getElementsByClassName('add-button')[0];
  buttonAdd.addEventListener('click', addOneTask);
};

export const bindDeleteAllButtons = deleteAllTasks => {
  const buttonDeleteAll =
    document.getElementsByClassName('delete-all-button')[0];
  buttonDeleteAll.addEventListener('click', deleteAllTasks);
};

// export const bindDeleteAndEditButtons = (deleteOneTask, editTask) => {
//   const buttonsDelete = document.getElementsByClassName('delete-button');
//   const buttonsEdit = document.getElementsByClassName('edit-button');

//   for (let i = 0; i < buttonsDelete.length; i++) {
//     const editOneTask = () => editTask(i);

//     eventManager.set(i, editOneTask);
//     buttonsEdit[i].addEventListener('click', editOneTask);
//     buttonsDelete[i].addEventListener('click', () => deleteOneTask(i), {
//       once: true,
//     });
//   }
// };

export const addEventListenerOnNode = (index, deleteOneTask, editTask) => {
  const buttonsDelete = document.getElementsByClassName('delete-button');
  const buttonsEdit = document.getElementsByClassName('edit-button');

  const indexLastEvent = index ?? buttonsDelete.length - 1;

  const editOneTask = () => editTask(indexLastEvent);

  eventManager.set(indexLastEvent, editOneTask);
  buttonsDelete[indexLastEvent].addEventListener(
    'click',
    () => deleteOneTask(indexLastEvent),
    { once: true },
  );
  buttonsEdit[indexLastEvent].addEventListener('click', editOneTask);
};
