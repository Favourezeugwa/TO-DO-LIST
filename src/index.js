import _ from 'lodash';
import './style.css';

import listItems from './modules/createlist.js';
import { list, SaveItem } from './modules/class.js';

const form = document.querySelector('#add-form');

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
