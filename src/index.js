import _ from 'lodash';
import './style.css';

import listItems from './modules/createlist.js';
import { list, SaveItem } from './modules/class.js';
import { clearTodos } from './test/__test__/checkbox.js';

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
  clearTodos(list, toDoList, listItems);
});
