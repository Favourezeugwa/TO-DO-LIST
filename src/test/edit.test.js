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

describe('Editing items', () => {
  test('edit item one', () => {
    itemSaved.addNew('eat breakfast');
    const list = document.querySelectorAll('.to-do-list li');

    itemSaved.editItem(1, 'Read book');
    const taskOne = document.querySelectorAll('.to-do-list li input[type=text]')[0].value;
    expect(taskOne).toBe('Read book');
  });

  test('edit item two', () => {
    itemSaved.addNew('eat lunch');
    const list = document.querySelectorAll('.to-do-list li');

    itemSaved.editItem(2, 'take a nap');
    const taskTwo = document.querySelectorAll('.to-do-list li input[type=text]')[1].value;
    expect(taskTwo).toBe('take a nap');
  });

  test('edit item three', () => {
    itemSaved.addNew('eat dinner');
    const list = document.querySelectorAll('.to-do-list li');

    itemSaved.editItem(2, 'watch a movie');
    const taskTwo = document.querySelectorAll('.to-do-list li input[type=text]')[1].value;
    expect(taskTwo).toBe('watch a movie');
  });
});
