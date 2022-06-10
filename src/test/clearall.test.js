/**
 * @jest-environment jsdom
 */

import { list, SaveItem } from './__test__/class.js';
// eslint-disable-next-line import/named
import { LocalStorageMock } from './__mocks__/localStorage.js';
import { check, clearTodos } from './__test__/checkbox.js';
import listItems from './__test__/createlist.js';

document.body.innerHTML = `
   <form action="#" id="add-form">
   <input
     type="text"
     id="add-item"
     name="add-item"
     placeholder="Add to your list..."
   /><i class="fa fa-arrow-turn-down"></i>
   </form>
   <ul class="to-do-list"></ul>
   <div id="btn">
      <button type="button" id="clear-btn">clear all completed</button>
    </div>`;

const checkbox = document.querySelectorAll('check-list').checked;

global.localStorage = LocalStorageMock;
const itemSaved = new SaveItem('description', false, 1);

describe('set check status', () => {
  test('test checked items', () => {
    itemSaved.addNew('eat breakfast');
    itemSaved.addNew('eat lunch');
    itemSaved.addNew('eat dinner');

    const itemOne = document.querySelectorAll('.to-do-list li input[type=text]')[0];
    const itemTwo = document.querySelectorAll('.to-do-list li input[type=text]')[1];
    const itemThree = document.querySelectorAll('.to-do-list li input[type=text]')[2];

    check(list[0], itemOne, list);
    check(list[2], itemThree, list);

    const itemOneStyle = itemOne.style.textDecoration;
    const itemTwoStyle = itemTwo.style.textDecoration;
    const itemThreeStyle = itemThree.style.textDecoration;

    expect(itemOneStyle).toBe('line-through');
    expect(itemTwoStyle).toBe('');
    expect(itemThreeStyle).toBe('line-through');
  });
});

describe('remove all completed status', () => {
  test('clear all completed todos', () => {
    const toDoList = document.querySelector('.to-do-list');

    clearTodos(list, toDoList, listItems);
    const todos = document.querySelectorAll('.to-do-list li');

    expect(todos).toHaveLength(1);
  });
});