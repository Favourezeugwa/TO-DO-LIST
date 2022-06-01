const toDoList = document.querySelector('.to-do-list');

const listItems = ({ description }) => {
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
  <button type="buton">
    <i class="fa fa-ellipsis-vertical"></i>
  </button>`;
  li.appendChild(button);
};

export default listItems;
