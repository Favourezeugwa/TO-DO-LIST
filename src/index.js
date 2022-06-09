import _ from 'lodash';
import './style.css';

import listItems from './modules/createlist.js';
import { list, SaveItem } from './modules/class.js';

const form = document.querySelector('#add-form');
const toDoList = document.querySelector('.to-do-list');
const clearCompleted = document.querySelector('#clear-btn');
const addItem = document.querySelector('#add-item');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const itemSaved = new SaveItem();
  itemSaved.addNew(addItem.value);
  form.reset();
});

for (let i = 1; i <= list.length; i += 1) {
  list.forEach((x) => {
    if (x.index === i) {
      listItems(x);
    }
  });
}

// clear all completed fields
clearCompleted.addEventListener('click', () => {
  let todos = list.filter((element) => element.completed === false);

  // to update the index
  let i = 1;
  todos = todos.map((element) => {
    element.index = i;
    i += 1;
    return element;
  });
  toDoList.innerHTML = '';
  todos.forEach((listItem, index) => {
    listItems(listItem, (index + 1));
  });
  localStorage.setItem('list', JSON.stringify(todos));
});
