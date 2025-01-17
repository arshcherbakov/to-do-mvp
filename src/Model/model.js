import uuid from './utils/uuid';
import escapeHtml from './utils/escape-html';
import { SECRET_KEY, MOCK_LIST_TASKS } from './constants';

const getListTasks = () => JSON.parse(localStorage.getItem(SECRET_KEY));

const updateData = listTasks =>
  localStorage.setItem(SECRET_KEY, JSON.stringify(listTasks));

export const deleteAllTasks = () => localStorage.removeItem(SECRET_KEY);

const validateTask = text => {
  if (!text.trim()) {
    return null;
  }

  return escapeHtml(text);
};

export const loadTask = () => {
  const listTasks = getListTasks();

  if (!listTasks) {
    updateData(MOCK_LIST_TASKS);
  }

  return listTasks;
};

export const addTaskInList = descriptionTask => {
  const description = validateTask(descriptionTask);

  if (!description) {
    return;
  }

  const listTasks = getListTasks();

  const taskId = uuid();

  const newTask = {
    id: taskId,
    description: description,
    isCompleted: false,
  };

  listTasks.push(newTask);

  updateData(listTasks);

  return newTask;
};

export const deleteTaskFromList = taskId => {
  const listTasks = getListTasks();

  const filtredTasks = listTasks.filter(task => task.id !== taskId);

  const newListTasks = filtredTasks.length ? filtredTasks : null;

  updateData(newListTasks);
};

export const editTaskFromList = (taskId, newValue) => {
  const listTasks = getListTasks();

  const editTask = listTasks.find(task => task.id === taskId);
  editTask.description = newValue;

  updateData(listTasks);
};

export const saveEditTask = (taskId, newDescription) => {
  const listTasks = getListTasks();

  const editTask = listTasks.find(task => task.id === taskId);
  editTask.description = newDescription;

  updateData(listTasks);

  return editTask;
};
