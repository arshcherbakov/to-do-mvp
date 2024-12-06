import uuid from './utils/uuid';

export const SECRET_KEY = "my gavno todo";

export const MOCK_LIST_TASKS = [ 
  {id: uuid(), description: 'task 1', isCompleted: false}, 
  {id: uuid(), description: 'task 2', isCompleted: false}
];

export const ESCAPES_CHARS = { 
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
};

export const ESCAPES_REG_EXP = /[&<>"']/g;