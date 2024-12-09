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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addOneTask: () => (/* binding */ addOneTask),\n/* harmony export */   initialize: () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _Model_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/model */ \"./src/Model/model.js\");\n/* harmony import */ var _View_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/view */ \"./src/View/view.js\");\n\n\n\nconst eventManager = new Map();\n\nconst initialize = () => {\n  showList();\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.bindAddButton)(addOneTask);\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.bindDeleteAllButtons)(deleteAllListTasks);\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.bindDeleteAndEditButtons)(deleteOneTask, editTask);\n};\n\nconst showList = () => {\n  const listTasks = (0,_Model_model__WEBPACK_IMPORTED_MODULE_0__.loadTask)();\n\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.showAllTasks)(listTasks);\n};\n\nconst addOneTask = () => {\n  const descriptionTask = (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.getDescriptionFromInput)();\n\n  const task = (0,_Model_model__WEBPACK_IMPORTED_MODULE_0__.addTaskInList)(descriptionTask);\n\n  if (!task) return;\n\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.addTask)(task);\n\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.addEventListenerOnNode)(null, deleteOneTask, editTask);\n};\n\nconst deleteOneTask = index => {\n  const taskId = (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.deleteTaskView)(index, 'click', eventManager.get(index));\n  eventManager.delete(index);\n\n  (0,_Model_model__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromList)(taskId);\n};\n\nconst deleteAllListTasks = () => {\n  (0,_Model_model__WEBPACK_IMPORTED_MODULE_0__.deleteAllTasks)();\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.deleteAllTaskView)();\n};\n\nconst saveEdit = (taskId, index) => {\n  const newDescription = (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.getEditedDescriptionTask)();\n\n  const editedTask = (0,_Model_model__WEBPACK_IMPORTED_MODULE_0__.saveEditTask)(taskId, newDescription);\n\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.saveEditView)(taskId, editedTask);\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.addEventListenerOnNode)(index, deleteOneTask, editTask);\n};\n\nconst cancelEditing = (taskId, textTask, index) => {\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.cancelEditingView)(taskId, textTask);\n  (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.addEventListenerOnNode)(index, deleteOneTask, editTask);\n};\n\nconst editTask = index => {\n  const taskId = (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.getIdTask)(index);\n\n  const textTask = (0,_View_view__WEBPACK_IMPORTED_MODULE_1__.editTaskView)(taskId);\n\n  if (textTask) {\n    const buttonSaveEdit =\n      document.getElementsByClassName('button-save-edit')[0];\n    const buttonCancelEdit =\n      document.getElementsByClassName('button-cancel-edit')[0];\n\n    buttonSaveEdit.addEventListener('click', () => saveEdit(taskId, index), {\n      once: true,\n    });\n    buttonCancelEdit.addEventListener(\n      'click',\n      () => cancelEditing(taskId, textTask, index),\n      { once: true },\n    );\n  }\n\n  (0,_Model_model__WEBPACK_IMPORTED_MODULE_0__.editTaskFromList)(taskId, textTask);\n};\n\n\n//# sourceURL=webpack://test_todo/./src/Controller/controller.js?");

/***/ }),

/***/ "./src/Model/constants.js":
/*!********************************!*\
  !*** ./src/Model/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ESCAPES_CHARS: () => (/* binding */ ESCAPES_CHARS),\n/* harmony export */   ESCAPES_REG_EXP: () => (/* binding */ ESCAPES_REG_EXP),\n/* harmony export */   MOCK_LIST_TASKS: () => (/* binding */ MOCK_LIST_TASKS),\n/* harmony export */   SECRET_KEY: () => (/* binding */ SECRET_KEY)\n/* harmony export */ });\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/uuid */ \"./src/Model/utils/uuid.js\");\n\n\nconst SECRET_KEY = 'my gavno todo';\n\nconst MOCK_LIST_TASKS = [\n  { id: (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), description: 'task 1', isCompleted: false },\n  { id: (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), description: 'task 2', isCompleted: false },\n];\n\nconst ESCAPES_CHARS = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#039;',\n};\n\nconst ESCAPES_REG_EXP = /[&<>\"']/g;\n\n\n//# sourceURL=webpack://test_todo/./src/Model/constants.js?");

/***/ }),

/***/ "./src/Model/model.js":
/*!****************************!*\
  !*** ./src/Model/model.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskInList: () => (/* binding */ addTaskInList),\n/* harmony export */   deleteAllTasks: () => (/* binding */ deleteAllTasks),\n/* harmony export */   deleteTaskFromList: () => (/* binding */ deleteTaskFromList),\n/* harmony export */   editTaskFromList: () => (/* binding */ editTaskFromList),\n/* harmony export */   loadTask: () => (/* binding */ loadTask),\n/* harmony export */   saveEditTask: () => (/* binding */ saveEditTask)\n/* harmony export */ });\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/uuid */ \"./src/Model/utils/uuid.js\");\n/* harmony import */ var _utils_escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/escape-html */ \"./src/Model/utils/escape-html.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/Model/constants.js\");\n\n\n\n\nconst getListTasks = () => JSON.parse(localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY));\n\nconst updateData = listTasks =>\n  localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY, JSON.stringify(listTasks));\n\nconst deleteAllTasks = () => localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_2__.SECRET_KEY);\n\nconst validateTask = text => {\n  if (!text.trim()) {\n    return null;\n  }\n\n  return (0,_utils_escape_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(text);\n};\n\nconst loadTask = () => {\n  const listTasks = getListTasks();\n\n  if (!listTasks) {\n    updateData(_constants__WEBPACK_IMPORTED_MODULE_2__.MOCK_LIST_TASKS);\n  }\n\n  return listTasks;\n};\n\nconst addTaskInList = descriptionTask => {\n  const description = validateTask(descriptionTask);\n\n  if (!description) {\n    return;\n  }\n\n  const listTasks = getListTasks();\n\n  const taskId = (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const newTask = {\n    id: taskId,\n    description: description,\n    isCompleted: false,\n  };\n\n  listTasks.push(newTask);\n\n  updateData(listTasks);\n\n  return newTask;\n};\n\nconst deleteTaskFromList = taskId => {\n  const listTasks = getListTasks();\n\n  const filtredTasks = listTasks.filter(task => task.id !== taskId);\n\n  const newListTasks = filtredTasks.length ? filtredTasks : null;\n\n  updateData(newListTasks);\n};\n\nconst editTaskFromList = (taskId, newValue) => {\n  const listTasks = getListTasks();\n\n  const editTask = listTasks.find(task => task.id === taskId);\n  editTask.description = newValue;\n\n  updateData(listTasks);\n};\n\nconst saveEditTask = (taskId, newDescription) => {\n  const listTasks = getListTasks();\n\n  const editTask = listTasks.find(task => task.id === taskId);\n  editTask.description = newDescription;\n\n  updateData(listTasks);\n\n  return editTask;\n};\n\n\n//# sourceURL=webpack://test_todo/./src/Model/model.js?");

/***/ }),

/***/ "./src/Model/utils/escape-html.js":
/*!****************************************!*\
  !*** ./src/Model/utils/escape-html.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/Model/constants.js\");\n\n\nconst escapeHtml = text =>\n  text.toString().replace(_constants__WEBPACK_IMPORTED_MODULE_0__.ESCAPES_REG_EXP, char => _constants__WEBPACK_IMPORTED_MODULE_0__.ESCAPES_CHARS[char]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (escapeHtml);\n\n\n//# sourceURL=webpack://test_todo/./src/Model/utils/escape-html.js?");

/***/ }),

/***/ "./src/Model/utils/uuid.js":
/*!*********************************!*\
  !*** ./src/Model/utils/uuid.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const generatorId = {\n//   id: 0,\n//   get getId() {\n//     return this.id;\n//   },\n\n//   [Symbol.iterator]() {\n//     return {\n//       next: () => {\n//         return { value: this.id++, done: false }\n//       }\n//     }\n//   }\n// }\n\nconst uuid = () => {\n  // generatorId[Symbol.iterator]().next();\n\n  return crypto.randomUUID();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuid);\n\n\n//# sourceURL=webpack://test_todo/./src/Model/utils/uuid.js?");

/***/ }),

/***/ "./src/View/view.js":
/*!**************************!*\
  !*** ./src/View/view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEventListenerOnNode: () => (/* binding */ addEventListenerOnNode),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   bindAddButton: () => (/* binding */ bindAddButton),\n/* harmony export */   bindDeleteAllButtons: () => (/* binding */ bindDeleteAllButtons),\n/* harmony export */   bindDeleteAndEditButtons: () => (/* binding */ bindDeleteAndEditButtons),\n/* harmony export */   cancelEditingView: () => (/* binding */ cancelEditingView),\n/* harmony export */   deleteAllTaskView: () => (/* binding */ deleteAllTaskView),\n/* harmony export */   deleteTaskView: () => (/* binding */ deleteTaskView),\n/* harmony export */   editTaskView: () => (/* binding */ editTaskView),\n/* harmony export */   getDescriptionFromInput: () => (/* binding */ getDescriptionFromInput),\n/* harmony export */   getEditedDescriptionTask: () => (/* binding */ getEditedDescriptionTask),\n/* harmony export */   getIdTask: () => (/* binding */ getIdTask),\n/* harmony export */   saveEditView: () => (/* binding */ saveEditView),\n/* harmony export */   showAllTasks: () => (/* binding */ showAllTasks)\n/* harmony export */ });\nconst eventManager = new Map();\n\nconst showAllTasks = listTasks => {\n  const elemetList = document.getElementsByClassName('task-list')[0];\n\n  listTasks.forEach(task => {\n    const li = document.createElement('li');\n\n    li.id = task.id;\n    li.style = 'display: flex; align-items: center; gap: 10px;';\n    li.innerHTML = `\n      <p class=\"description-text\">${task.description}</p>\n      <button class=\"delete-button\" style=\"height: 20px\">Удалить</button> \n      <button class=\"edit-button\" style=\"height: 20px\">Изменить</button>\n    `;\n\n    elemetList.appendChild(li);\n  });\n};\n\nconst getDescriptionFromInput = () => {\n  const searchInputElemet = document.getElementsByClassName('search-input')[0];\n\n  return searchInputElemet.value;\n};\n\nconst getIdTask = index => {\n  const buttonDelete = document.getElementsByClassName('delete-button')[index];\n\n  if (buttonDelete) {\n    const liElement = buttonDelete.closest('li');\n\n    return liElement.id;\n  }\n\n  return null;\n};\n\nconst addTask = task => {\n  const elemetList = document.getElementsByClassName('task-list')[0];\n  const newLi = document.createElement('li');\n  newLi.id = task.id;\n  newLi.style = 'display: flex; align-items: center; gap: 10px;';\n\n  newLi.innerHTML = `\n    <p class=\"description-text\">${task.description}</p>\n    <button class=\"delete-button\" style=\"height: 20px\">Удалить</button>\n    <button class=\"edit-button\" style=\"height: 20px\">Изменить</button>\n  `;\n\n  elemetList.append(newLi);\n\n  const searchInputElemet = document.getElementsByClassName('search-input')[0];\n  searchInputElemet.value = '';\n};\n\nconst deleteTaskView = (index, nameEvent, event) => {\n  const taskId = getIdTask(index);\n\n  const taskElement = document.getElementById(taskId);\n\n  taskElement.removeEventListener(nameEvent, event);\n  taskElement.parentNode.removeChild(taskElement);\n\n  return taskId;\n};\n\nconst getEditedDescriptionTask = () => {\n  const editInput = document.getElementsByClassName('edit-input')[0];\n\n  return editInput.value;\n};\n\nconst saveEditView = (taskId, editedTask) => {\n  const taskElement = document.getElementById(taskId);\n\n  taskElement.innerHTML = `\n    <p class=\"description-text\">${editedTask.description}</p>\n    <button class=\"delete-button\" style=\"height: 20px\">Удалить</button>\n    <button class=\"edit-button\" style=\"height: 20px\">Изменить</button>\n  `;\n};\n\nconst cancelEditingView = (taskId, textTask) => {\n  const taskElement = document.getElementById(taskId);\n\n  taskElement.innerHTML = `\n    <p class=\"description-text\">${textTask}</p>\n    <button class=\"delete-button\" style=\"height: 20px\">Удалить</button>\n    <button class=\"edit-button\" style=\"height: 20px\">Изменить</button>\n  `;\n};\n\nconst editTaskView = taskId => {\n  const taskElement = document.getElementById(taskId);\n  const textElement = taskElement.getElementsByClassName('description-text')[0];\n\n  const textTask = textElement.textContent;\n\n  const buttons = taskElement.getElementsByTagName('button');\n  buttons[0].style = 'display: none;';\n  buttons[1].style = 'display: none;';\n\n  taskElement.innerHTML = `\n    <input class=\"edit-input\" placeholder=\"Название задачи\" value=\"${textTask}\" />\n    <button class=\"button-save-edit\">Сохранить</button>\n    <button class=\"button-cancel-edit\">Отмена</button>\n  `;\n\n  return textTask;\n};\n\nconst deleteAllTaskView = () => {\n  const listElementsTasks = document.getElementsByTagName('li');\n  console.log(listElementsTasks);\n\n  for (let i = 0; i < listElementsTasks.length; i++) {\n    listElementsTasks[i].removeEventListener('click', eventManager.get(i));\n    listElementsTasks[i].parentNode.removeChild(listElementsTasks[i]);\n  }\n};\n\nconst bindAddButton = addOneTask => {\n  const buttonAdd = document.getElementsByClassName('add-button')[0];\n  buttonAdd.addEventListener('click', addOneTask);\n};\n\nconst bindDeleteAllButtons = deleteAllTasks => {\n  const buttonDeleteAll =\n    document.getElementsByClassName('delete-all-button')[0];\n  buttonDeleteAll.addEventListener('click', deleteAllTasks);\n};\n\nconst bindDeleteAndEditButtons = (deleteOneTask, editTask) => {\n  const buttonsDelete = document.getElementsByClassName('delete-button');\n  const buttonsEdit = document.getElementsByClassName('edit-button');\n\n  for (let i = 0; i < buttonsDelete.length; i++) {\n    const editOneTask = () => editTask(i);\n\n    eventManager.set(i, editOneTask);\n    buttonsEdit[i].addEventListener('click', editOneTask);\n    buttonsDelete[i].addEventListener('click', () => deleteOneTask(i), {\n      once: true,\n    });\n  }\n};\n\nconst addEventListenerOnNode = (index, deleteOneTask, editTask) => {\n  const buttonsDelete = document.getElementsByClassName('delete-button');\n  const buttonsEdit = document.getElementsByClassName('edit-button');\n\n  const indexLastEvent = index ?? buttonsDelete.length - 1;\n\n  const editOneTask = () => editTask(indexLastEvent);\n\n  eventManager.set(indexLastEvent, editOneTask);\n  buttonsDelete[indexLastEvent].addEventListener(\n    'click',\n    () => deleteOneTask(indexLastEvent),\n    { once: true },\n  );\n  buttonsEdit[indexLastEvent].addEventListener('click', editOneTask);\n};\n\n\n//# sourceURL=webpack://test_todo/./src/View/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller/controller */ \"./src/Controller/controller.js\");\n\n\n(0,_Controller_controller__WEBPACK_IMPORTED_MODULE_0__.initialize)();\n\n\n//# sourceURL=webpack://test_todo/./src/index.js?");

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