/**
 * @jest-environment jsdom
 */

import { SaveItem } from './__test__/class.js';
// eslint-disable-next-line import/named
import { LocalStorageMock } from './__mocks__/localStorage.js';
// import { TestEnvironment } from 'jest-environment-jsdom';

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
describe('add items to list', () => {
  test('add item one', () => {
    itemSaved.addNew('eat breakfast');
    const list = document.querySelectorAll('.to-do-list li');
    expect(list).toHaveLength(1);
  });

  test('add item two', () => {
    itemSaved.addNew('eat lunch');
    const list = document.querySelectorAll('.to-do-list li');
    expect(list).toHaveLength(2);
  });

  test('add item three', () => {
    itemSaved.addNew('eat dinner');
    const list = document.querySelectorAll('.to-do-list li');
    expect(list).toHaveLength(3);
  });

  test('add item three', () => {
    itemSaved.addNew('eat dinner');
    const list = document.querySelectorAll('.to-do-list li');
    expect(list).not.toHaveLength(2);
  });
});
