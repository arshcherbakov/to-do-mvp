/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller/controller.js":
/*!**************************************!*\
  !*** ./src/Controller/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addOneTask: () => (/* binding */ addOneTask),\n/* harmony export */   initialize: () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _Model_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/model.js */ \"./src/Model/model.js\");\n/* harmony import */ var _View_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/view.js */ \"./src/View/view.js\");\n\r\n\r\n\r\nconst initialize = () => {\r\n  showList();\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.bindAddButton)(addOneTask);\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.bindDeleteAllButtons)(deleteAllListTasks);\r\n  // bindDeleteAndEditButtons(deleteOneTask, editTask);\r\n};\r\n\r\nconst showList = () => {\r\n  const listTasks = (0,_Model_model_js__WEBPACK_IMPORTED_MODULE_0__.loadTask)();\r\n\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.showAllTasks)(listTasks, deleteOneTask, editTask);\r\n};\r\n\r\nconst addOneTask = () => {\r\n  const descriptionTask = (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.getDescriptionFromInput)();\r\n\r\n  const task = (0,_Model_model_js__WEBPACK_IMPORTED_MODULE_0__.addTaskInList)(descriptionTask);\r\n\r\n  if (!task) return;\r\n\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(task);\r\n};\r\n\r\nconst deleteOneTask = taskId => {\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.deleteTaskView)(taskId, 'click');\r\n\r\n  (0,_Model_model_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromList)(taskId);\r\n};\r\n\r\nconst deleteAllListTasks = () => {\r\n  (0,_Model_model_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllTasks)();\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.deleteAllTaskView)();\r\n};\r\n\r\nconst saveEdit = (taskId, index) => {\r\n  const newDescription = (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.getEditedDescriptionTask)();\r\n\r\n  const editedTask = (0,_Model_model_js__WEBPACK_IMPORTED_MODULE_0__.saveEditTask)(taskId, newDescription);\r\n\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.saveEditView)(taskId, editedTask);\r\n  // addEventListenerOnNode(index, deleteOneTask, editTask);\r\n};\r\n\r\nconst cancelEditing = (taskId, textTask, index) => {\r\n  (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.cancelEditingView)(taskId, textTask);\r\n  // addEventListenerOnNode(index, deleteOneTask, editTask);\r\n};\r\n\r\nconst editTask = taskId => {\r\n  const textTask = (0,_View_view_js__WEBPACK_IMPORTED_MODULE_1__.editTaskView)(taskId);\r\n\r\n  if (textTask) {\r\n    const buttonSaveEdit =\r\n      document.getElementsByClassName('button-save-edit')[0];\r\n    const buttonCancelEdit =\r\n      document.getElementsByClassName('button-cancel-edit')[0];\r\n\r\n    buttonSaveEdit.addEventListener('click', () => saveEdit(taskId, index), {\r\n      once: true,\r\n    });\r\n    buttonCancelEdit.addEventListener(\r\n      'click',\r\n      () => cancelEditing(taskId, textTask, index),\r\n      { once: true },\r\n    );\r\n  }\r\n\r\n  (0,_Model_model_js__WEBPACK_IMPORTED_MODULE_0__.editTaskFromList)(taskId, textTask);\r\n};\r\n\n\n//# sourceURL=webpack://test_todo/./src/Controller/controller.js?");

/***/ }),

/***/ "./src/Model/constants.js":
/*!********************************!*\
  !*** ./src/Model/constants.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ESCAPES_CHARS: () => (/* binding */ ESCAPES_CHARS),\n/* harmony export */   ESCAPES_REG_EXP: () => (/* binding */ ESCAPES_REG_EXP),\n/* harmony export */   MOCK_LIST_TASKS: () => (/* binding */ MOCK_LIST_TASKS),\n/* harmony export */   SECRET_KEY: () => (/* binding */ SECRET_KEY)\n/* harmony export */ });\n/* harmony import */ var _utils_uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/uuid.js */ \"./src/Model/utils/uuid.js\");\n\r\n\r\nconst SECRET_KEY = 'my gavno todo';\r\n\r\nconst MOCK_LIST_TASKS = [\r\n  { id: (0,_utils_uuid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), description: 'task 1', isCompleted: false },\r\n  { id: (0,_utils_uuid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), description: 'task 2', isCompleted: false },\r\n];\r\n\r\nconst ESCAPES_CHARS = {\r\n  '&': '&amp;',\r\n  '<': '&lt;',\r\n  '>': '&gt;',\r\n  '\"': '&quot;',\r\n  \"'\": '&#039;',\r\n};\r\n\r\nconst ESCAPES_REG_EXP = /[&<>\"']/g;\r\n\n\n//# sourceURL=webpack://test_todo/./src/Model/constants.js?");

/***/ }),

/***/ "./src/Model/model.js":
/*!****************************!*\
  !*** ./src/Model/model.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskInList: () => (/* binding */ addTaskInList),\n/* harmony export */   deleteAllTasks: () => (/* binding */ deleteAllTasks),\n/* harmony export */   deleteTaskFromList: () => (/* binding */ deleteTaskFromList),\n/* harmony export */   editTaskFromList: () => (/* binding */ editTaskFromList),\n/* harmony export */   loadTask: () => (/* binding */ loadTask),\n/* harmony export */   saveEditTask: () => (/* binding */ saveEditTask)\n/* harmony export */ });\n/* harmony import */ var _utils_uuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/uuid.js */ \"./src/Model/utils/uuid.js\");\n/* harmony import */ var _utils_escape_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/escape-html.js */ \"./src/Model/utils/escape-html.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ \"./src/Model/constants.js\");\n\r\n\r\n\r\n\r\nconst getListTasks = () => JSON.parse(localStorage.getItem(_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY));\r\n\r\nconst updateData = listTasks =>\r\n  localStorage.setItem(_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY, JSON.stringify(listTasks));\r\n\r\nconst deleteAllTasks = () => localStorage.removeItem(_constants_js__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY);\r\n\r\nconst validateTask = text => {\r\n  if (!text.trim()) {\r\n    return null;\r\n  }\r\n\r\n  return (0,_utils_escape_html_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(text);\r\n};\r\n\r\nconst loadTask = () => {\r\n  const listTasks = getListTasks();\r\n\r\n  if (listTasks) {\r\n    return listTasks;\r\n  }\r\n\r\n  updateData(_constants_js__WEBPACK_IMPORTED_MODULE_2__.MOCK_LIST_TASKS);\r\n};\r\n\r\nconst addTaskInList = descriptionTask => {\r\n  const description = validateTask(descriptionTask);\r\n\r\n  if (!description) {\r\n    return;\r\n  }\r\n\r\n  const listTasks = getListTasks();\r\n\r\n  const taskId = (0,_utils_uuid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  const newTask = {\r\n    id: taskId,\r\n    description: description,\r\n    isCompleted: false,\r\n  };\r\n\r\n  updateData([...listTasks, newTask]);\r\n\r\n  return newTask;\r\n};\r\n\r\nconst deleteTaskFromList = taskId => {\r\n  const listTasks = getListTasks();\r\n\r\n  const filtredTasks = listTasks.filter(task => task.id !== taskId);\r\n\r\n  const newListTasks = filtredTasks.length ? filtredTasks : _constants_js__WEBPACK_IMPORTED_MODULE_2__.MOCK_LIST_TASKS;\r\n\r\n  updateData(newListTasks);\r\n};\r\n\r\nconst editTaskFromList = (taskId, newValue) => {\r\n  const listTasks = getListTasks();\r\n\r\n  const editTask = listTasks.find(task => task.id === taskId);\r\n  editTask.description = newValue;\r\n\r\n  updateData(listTasks);\r\n};\r\n\r\nconst saveEditTask = (taskId, newDescription) => {\r\n  const listTasks = getListTasks();\r\n\r\n  const editTask = listTasks.find(task => task.id === taskId);\r\n  editTask.description = newDescription;\r\n\r\n  updateData(listTasks);\r\n\r\n  return editTask;\r\n};\r\n\n\n//# sourceURL=webpack://test_todo/./src/Model/model.js?");

/***/ }),

/***/ "./src/Model/utils/escape-html.js":
/*!****************************************!*\
  !*** ./src/Model/utils/escape-html.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ \"./src/Model/constants.js\");\n\r\n\r\nconst escapeHtml = text =>\r\n  text.toString().replace(_constants_js__WEBPACK_IMPORTED_MODULE_0__.ESCAPES_REG_EXP, char => _constants_js__WEBPACK_IMPORTED_MODULE_0__.ESCAPES_CHARS[char]);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (escapeHtml);\r\n\n\n//# sourceURL=webpack://test_todo/./src/Model/utils/escape-html.js?");

/***/ }),

/***/ "./src/Model/utils/uuid.js":
/*!*********************************!*\
  !*** ./src/Model/utils/uuid.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const generatorId = {\r\n//   id: 0,\r\n//   get getId() {\r\n//     return this.id;\r\n//   },\r\n\r\n//   [Symbol.iterator]() {\r\n//     return {\r\n//       next: () => {\r\n//         return { value: this.id++, done: false }\r\n//       }\r\n//     }\r\n//   }\r\n// }\r\n\r\nconst uuid = () => {\r\n  // generatorId[Symbol.iterator]().next();\r\n\r\n  return crypto.randomUUID();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuid);\r\n\n\n//# sourceURL=webpack://test_todo/./src/Model/utils/uuid.js?");

/***/ }),

/***/ "./src/View/view.js":
/*!**************************!*\
  !*** ./src/View/view.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventListenerOnNode: () => (/* binding */ addEventListenerOnNode),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   bindAddButton: () => (/* binding */ bindAddButton),\n/* harmony export */   bindDeleteAllButtons: () => (/* binding */ bindDeleteAllButtons),\n/* harmony export */   cancelEditingView: () => (/* binding */ cancelEditingView),\n/* harmony export */   deleteAllTaskView: () => (/* binding */ deleteAllTaskView),\n/* harmony export */   deleteTaskView: () => (/* binding */ deleteTaskView),\n/* harmony export */   editTaskView: () => (/* binding */ editTaskView),\n/* harmony export */   getDescriptionFromInput: () => (/* binding */ getDescriptionFromInput),\n/* harmony export */   getEditedDescriptionTask: () => (/* binding */ getEditedDescriptionTask),\n/* harmony export */   getIdTask: () => (/* binding */ getIdTask),\n/* harmony export */   saveEditView: () => (/* binding */ saveEditView),\n/* harmony export */   showAllTasks: () => (/* binding */ showAllTasks)\n/* harmony export */ });\nconst eventManager = new Map();\r\n\r\nconst createTaskView = (task, deleteOneTask, editTask) => {\r\n  const buttonDelete = document.createElement('button');\r\n  buttonDelete.className = 'delete-button';\r\n  buttonDelete.style = 'height: 20px';\r\n  buttonDelete.textContent = 'Удалить';\r\n\r\n  const buttonEdit = document.createElement('button');\r\n  buttonEdit.className = 'edit-button';\r\n  buttonEdit.style = 'height: 20px';\r\n  buttonEdit.textContent = 'Изменить';\r\n\r\n  const li = document.createElement('li');\r\n\r\n  li.id = task.id;\r\n  li.style = 'display: flex; align-items: center; gap: 10px;';\r\n  li.innerHTML = `\r\n    <p class=\"description-text\">${task.description}</p>\r\n  `;\r\n  li.append(buttonDelete);\r\n  li.append(buttonEdit);\r\n\r\n  const editOneTask = () => editTask(task.id);\r\n  const deleteTask = () => deleteOneTask(task.id);\r\n\r\n  eventManager.set(`${task.id}-edit`, editOneTask);\r\n  eventManager.set(`${task.id}-delete`, deleteTask);\r\n\r\n  buttonDelete.addEventListener('click', deleteTask);\r\n  buttonEdit.addEventListener('click', editOneTask);\r\n\r\n  return li;\r\n};\r\n\r\nconst showAllTasks = (listTasks, deleteOneTask, editTask) => {\r\n  const elemetList = document.getElementsByClassName('task-list')[0];\r\n\r\n  listTasks.forEach(task => {\r\n    const createdViewTask = createTaskView(task, deleteOneTask, editTask);\r\n    elemetList.appendChild(createdViewTask);\r\n  });\r\n};\r\n\r\nconst getDescriptionFromInput = () => {\r\n  const searchInputElemet = document.getElementsByClassName('search-input')[0];\r\n\r\n  return searchInputElemet.value;\r\n};\r\n\r\nconst getIdTask = index => {\r\n  const buttonDelete = document.getElementsByClassName('delete-button')[index];\r\n\r\n  if (buttonDelete) {\r\n    const liElement = buttonDelete.closest('li');\r\n\r\n    return liElement.id;\r\n  }\r\n\r\n  return null;\r\n};\r\n\r\nconst addTask = task => {\r\n  const elemetList = document.getElementsByClassName('task-list')[0];\r\n\r\n  const createdViewTask = createTaskView(task, deleteOneTask, editTask);\r\n  elemetList.append(createdViewTask);\r\n\r\n  const searchInputElemet = document.getElementsByClassName('search-input')[0];\r\n  searchInputElemet.value = '';\r\n};\r\n\r\nconst deleteTaskView = (taskId, nameEvent) => {\r\n  const taskElement = document.getElementById(taskId);\r\n  taskElement.getElementsByClassName('button-edit');\r\n\r\n  taskElement.removeEventListener(nameEvent, eventManager.get(taskId));\r\n  taskElement.parentNode.removeChild(taskElement);\r\n\r\n  eventManager.delete(`${task.id}-edit`);\r\n  eventManager.delete(`${task.id}-delete`);\r\n};\r\n\r\nconst getEditedDescriptionTask = () => {\r\n  const editInput = document.getElementsByClassName('edit-input')[0];\r\n\r\n  return editInput.value;\r\n};\r\n\r\nconst saveEditView = (taskId, editedTask) => {\r\n  const taskElement = document.getElementById(taskId);\r\n\r\n  taskElement.innerHTML = `\r\n    <p class=\"description-text\">${editedTask.description}</p>\r\n    <button class=\"delete-button\" style=\"height: 20px\">Удалить</button>\r\n    <button class=\"edit-button\" style=\"height: 20px\">Изменить</button>\r\n  `;\r\n};\r\n\r\nconst createEditTaskView = (textTask, taskElement, taskId) => {\r\n  const buttonCancel = document.createElement('button');\r\n  buttonCancel.className = 'button-cancel-edit';\r\n  buttonCancel.style = 'height: 20px';\r\n  buttonCancel.textContent = 'Отмена';\r\n\r\n  const buttonSave = document.createElement('button');\r\n  buttonSave.className = 'button-save-edit';\r\n  buttonSave.style = 'height: 20px';\r\n  buttonSave.textContent = 'Сохранить';\r\n\r\n  taskElement.innerHTML = `\r\n    <input class=\"edit-input\" placeholder=\"Название задачи\" value=\"${textTask}\" />\r\n  `;\r\n  taskElement.append(buttonCancel);\r\n  taskElement.append(buttonSave);\r\n\r\n  const cancelEditing = () =>\r\n    cancelEditingView({ id: taskId, description: textTask }, taskElement);\r\n  const saveEdit = () => saveEditView();\r\n\r\n  buttonCancel.addEventListener('click', cancelEditing);\r\n  buttonSave.addEventListener('click', saveEdit);\r\n};\r\n\r\nconst editTaskView = taskId => {\r\n  const taskElement = document.getElementById(taskId);\r\n  const textElement = taskElement.getElementsByTagName('p')[0];\r\n  const buttons = taskElement.getElementsByTagName('button');\r\n\r\n  const textTask = textElement.textContent;\r\n\r\n  taskElement.removeChild(textElement);\r\n  taskElement.removeChild(buttons[1]);\r\n  taskElement.removeChild(buttons[0]);\r\n\r\n  createEditTaskView(textTask, taskElement);\r\n\r\n  // return textTask;\r\n};\r\n\r\nconst cancelEditingView = (oldDataTask, taskElement) => {\r\n  const buttons = taskElement.getElementsByTagName('button');\r\n  const input = taskElement.getElementsByTagName('input')[0];\r\n\r\n  taskElement.removeChild(input);\r\n  taskElement.removeChild(buttons[1]);\r\n  taskElement.removeChild(buttons[0]);\r\n\r\n  const taskView = createTaskView(\r\n    oldDataTask,\r\n    eventManager.get(`${oldDataTask.id}-delete`),\r\n    eventManager.get(`${oldDataTask.id}-edit`),\r\n  );\r\n\r\n  taskElement.append(taskView);\r\n};\r\n\r\nconst deleteAllTaskView = () => {\r\n  const listElementsTasks = document.getElementsByTagName('li');\r\n  console.log(listElementsTasks);\r\n\r\n  for (let i = 0; i < listElementsTasks.length; i++) {\r\n    listElementsTasks[i].removeEventListener('click', eventManager.get(i));\r\n    listElementsTasks[i].parentNode.removeChild(listElementsTasks[i]);\r\n  }\r\n};\r\n\r\nconst bindAddButton = addOneTask => {\r\n  const buttonAdd = document.getElementsByClassName('add-button')[0];\r\n  buttonAdd.addEventListener('click', addOneTask);\r\n};\r\n\r\nconst bindDeleteAllButtons = deleteAllTasks => {\r\n  const buttonDeleteAll =\r\n    document.getElementsByClassName('delete-all-button')[0];\r\n  buttonDeleteAll.addEventListener('click', deleteAllTasks);\r\n};\r\n\r\n// export const bindDeleteAndEditButtons = (deleteOneTask, editTask) => {\r\n//   const buttonsDelete = document.getElementsByClassName('delete-button');\r\n//   const buttonsEdit = document.getElementsByClassName('edit-button');\r\n\r\n//   for (let i = 0; i < buttonsDelete.length; i++) {\r\n//     const editOneTask = () => editTask(i);\r\n\r\n//     eventManager.set(i, editOneTask);\r\n//     buttonsEdit[i].addEventListener('click', editOneTask);\r\n//     buttonsDelete[i].addEventListener('click', () => deleteOneTask(i), {\r\n//       once: true,\r\n//     });\r\n//   }\r\n// };\r\n\r\nconst addEventListenerOnNode = (index, deleteOneTask, editTask) => {\r\n  const buttonsDelete = document.getElementsByClassName('delete-button');\r\n  const buttonsEdit = document.getElementsByClassName('edit-button');\r\n\r\n  const indexLastEvent = index ?? buttonsDelete.length - 1;\r\n\r\n  const editOneTask = () => editTask(indexLastEvent);\r\n\r\n  eventManager.set(indexLastEvent, editOneTask);\r\n  buttonsDelete[indexLastEvent].addEventListener(\r\n    'click',\r\n    () => deleteOneTask(indexLastEvent),\r\n    { once: true },\r\n  );\r\n  buttonsEdit[indexLastEvent].addEventListener('click', editOneTask);\r\n};\r\n\n\n//# sourceURL=webpack://test_todo/./src/View/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller/controller.js */ \"./src/Controller/controller.js\");\n\r\n\r\n(0,_Controller_controller_js__WEBPACK_IMPORTED_MODULE_0__.initialize)();\r\n\n\n//# sourceURL=webpack://test_todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;