import listItems from './createlist.js';
// const { listItems } = require('./createlist.js');

let list = JSON.parse(localStorage.getItem('list')) || [];
// can be re written as - let list = localStorage.getItem('list') || [];
class SaveItem {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  // methods
  // add new Item
  addNew(newTodo) {
    this.description = newTodo;
    this.index = list.length + 1;
    list.push({
      description: this.description,
      completed: this.completed,
      index: this.index,
    });
    localStorage.setItem('list', JSON.stringify(list));
    // can be re written as - localStorage('list', list);
    listItems(this, list.length + 1);
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
  };

  // update Index
  updateIndex = () => {
    list = list.map((element, index) => {
      element.index = index + 1;
      return element;
    });
    localStorage.setItem('list', JSON.stringify(list));
  };

  // edit text Item
  editItem = (id, text) => {
    list = list.map((element) => {
      if (element.index === id) {
        element.description = text;
      }
      return element;
    });
    const toDoList = document.querySelector('.to-do-list');
    toDoList.innerHTML = '';
    localStorage.setItem('list', JSON.stringify(list));
    this.displaytodos();
  };
}

export { list, SaveItem };
// module.exports
