/**
 * @jest-environment jsdom
 */

import { SaveItem } from './__test__/class.js';
// eslint-disable-next-line import/named
import { LocalStorageMock } from './__mocks__/localStorage.js';
// import {check} from './__test__/checkbox.js';

document.body.innerHTML = `
   <form action="#" id="add-form">
   <input
     type="text"
     id="add-item"
     name="add-item"
     placeholder="Add to your list..."
   /><i class="fa fa-arrow-turn-down"></i>
   </form>
   <ul class="to-do-list"></ul>`;

const checkbox = document.querySelectorAll('check-list').checked;

global.localStorage = LocalStorageMock;
let itemSaved = new SaveItem('description', false, 1);
// if (itemSaved.completed) {
//   checkbox.checked = true;
//   itemSaved.completed = true;
// }

describe('status completed on check', () => {
  test('status completed or not', () => {
    itemSaved.addNew('eat breakfast');
    const list = document.querySelectorAll('.to-do-list li');
    if (itemSaved.completed) {
      checkbox.checked = true;

      itemSaved.completed = true;
    }
    itemSaved = new SaveItem('description', true, 1);
    expect(itemSaved.completed).toBe(true);
  });
});
