import listItems from './createlist.js';

const addItem = document.querySelector('#add-item');

let list = JSON.parse(localStorage.getItem('list')) || [];
class SaveItem {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  // methods
  // add new Item
  addNew() {
    this.description = addItem.value;
    this.index = list.length + 1;
    list.push(this);
    localStorage.setItem('list', JSON.stringify(list));
    listItems(this, this.index);
  }

  // remove Item
  removeItem(index) {
    list = list.filter((element) => element.index !== index);
    localStorage.setItem('list', JSON.stringify(list));
    const toDoList = document.querySelector('.to-do-list');
    toDoList.innerHTML = '';
    this.updateIndex();
    this.displaytodos();
  }

  // display items after delete
  displaytodos = () => {
    list.forEach((listObj, index) => {
      listItems(listObj, index + 1);
    });
    localStorage.setItem('list', JSON.stringify(list));
  }

  // update Index
  updateIndex = () => {
    list = list.map((element, index) => {
      element.index = index + 1;
      return element;
    });
    localStorage.setItem('list', JSON.stringify(list));
  }

  // edit text Item
  editItem = (id, text) => {
    list.forEach((element) => {
      if (element.index === id) {
        element.description = text;
      }
    });
    localStorage.setItem('list', JSON.stringify(list));
  }
}

export { list, SaveItem };
