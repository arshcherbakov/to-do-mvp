import { 
  loadTask,
  addTaskInList, 
  deleteTaskFromList,
  editTaskFromList, 
  saveEditTask,
} from '../Model/model';
import { 
  showAllTasks, 
  addTask, 
  getDescriptionFromInput, 
  deleteTaskView,
  getIdTask,
  getEditedDescriptionTask,
  cancelEditingView,
  editTaskView, 
  saveEditView,
} from '../View/view';

const eventManager = new Map();

const showList = () => {
  const listTasks = loadTask();

  showAllTasks(listTasks);
}

const addOneTask = () => {
  const descriptionTask = getDescriptionFromInput();

  if (!descriptionTask.trim()) {
    return;
  }

  const task = addTaskInList(descriptionTask);

  addTask(task);

  addEventListenerOnNode();
}

const deleteOneTask = (index) => {
  const taskId = deleteTaskView(index, "click", eventManager.get(index));
  eventManager.delete(index);

  deleteTaskFromList(taskId);
}

const saveEdit = (taskId, index) => {
  const newDescription = getEditedDescriptionTask();

  const editedTask = saveEditTask(taskId, newDescription);

  saveEditView(taskId, editedTask);
  addEventListenerOnNode(index);
}

const cancelEditing = (taskId, textTask, index) => {
  cancelEditingView(taskId, textTask);
  addEventListenerOnNode(index);
}

const editTask = (index) => {
  const taskId = getIdTask(index);

  const textTask = editTaskView(taskId);

  if (textTask) {
    const buttonSaveEdit = document.getElementsByClassName("button-save-edit")[0];
    const buttonCancelEdit = document.getElementsByClassName("button-cancel-edit")[0];

    buttonSaveEdit.addEventListener("click", () => saveEdit(taskId, index), {once: true});
    buttonCancelEdit.addEventListener("click", () => cancelEditing(taskId, textTask, index), {once: true});
  }

  editTaskFromList(taskId, textTask);
}

showList();

// ------------------------------------------------------------------------------------
const buttonAdd = document.getElementsByClassName("add-button")[0];
buttonAdd.addEventListener("click", addOneTask);

const buttonsDelete = document.getElementsByClassName("delete-button");
const buttonsEdit = document.getElementsByClassName("edit-button");

for (let i = 0; i < buttonsDelete.length; i++) {
  const editOneTask = () => editTask(i);
  
  eventManager.set("click", editOneTask);
  buttonsEdit[i].addEventListener("click", editOneTask);
  buttonsDelete[i].addEventListener("click", () => deleteOneTask(i), { once: true });
}

const addEventListenerOnNode = (index) => {
  const buttonsDelete = document.getElementsByClassName("delete-button");
  const buttonsEdit = document.getElementsByClassName("edit-button");

  const indexLastEvent = index ?? buttonsDelete.length - 1;

  const editOneTask = () => editTask(indexLastEvent);

  eventManager.set("click", editOneTask);
  buttonsDelete[indexLastEvent].addEventListener("click", () => deleteOneTask(indexLastEvent), { once: true });
  buttonsEdit[indexLastEvent].addEventListener("click", editOneTask);
}
