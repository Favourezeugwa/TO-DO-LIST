import { list, SaveItem } from './class.js';

const toDoList = document.querySelector('.to-do-list');

const listItems = ({ description }, id) => {
  const li = document.createElement('li');
  toDoList.appendChild(li);
  const div = document.createElement('div');
  div.classList.add('list-container');
  li.appendChild(div);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('check-list');
  div.appendChild(checkbox);

  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', description);
  text.setAttribute('disabled', '');
  div.appendChild(text);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = `
    <i class="fa fa-ellipsis-vertical"></i>`;

  button.addEventListener('click', (event) => {
    const itemParent = event.target.parentNode.parentNode;
    itemParent.querySelector('.fa-trash-can').parentNode.style.display = 'block';
    button.style.display = 'none';
    // to edit text
    text.disabled = false;
    text.focus();
  });
  li.appendChild(button);

  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.innerHTML = `
    <i class='fa-solid fa-trash-can'></i>`;
  deleteButton.style.display = 'none';

  deleteButton.id = id;
  deleteButton.addEventListener('click', (event) => {
    const deleteItem = new SaveItem();
    deleteItem.removeItem(id);
  });
  li.appendChild(deleteButton);

  // edit text Item
  text.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      text.placeholder = text.value;
      button.style.display = 'flex';
      deleteButton.style.display = 'none';
      text.disabled = true;
      const Item = new SaveItem();
      Item.editItem(id, text.value);
    }
  });
};

export default listItems;
