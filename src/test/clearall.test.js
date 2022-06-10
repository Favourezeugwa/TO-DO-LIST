/**
 * @jest-environment jsdom
 */

import { SaveItem } from './__test__/class.js';
// eslint-disable-next-line import/named
import { LocalStorageMock } from './__mocks__/localStorage.js';

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

global.localStorage = LocalStorageMock;
const itemSaved = new SaveItem('description', false, 1);
