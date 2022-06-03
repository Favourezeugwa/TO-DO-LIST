import _ from 'lodash';
import './style.css';

import listItems from './modules/createlist.js';
import { list, SaveItem } from './modules/class.js';

const form = document.querySelector('#add-form');
const toDoList = document.querySelector('.to-do-list');
const clearCompleted = document.querySelector('#clear-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const itemSaved = new SaveItem();
  itemSaved.addNew();
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
  const newlist = list.filter((element) => element.completed === false);
  list.forEach((element) => {
    if (!newlist.includes(element)) {
      list.splice(list.indexOf(element), 1);
    }
  });
  let i = 1;
  list.forEach((element) => {
    element.index = i;
    i += 1;
  });
  toDoList.innerHTML = '';
  for (let i = 1; i <= list.length; i += 1) {
    list.forEach((listItem) => {
      if (listItem.index === i) {
        listItems(listItem);
      }
    });
  }
  localStorage.setItem('list', JSON.stringify(list));
});

