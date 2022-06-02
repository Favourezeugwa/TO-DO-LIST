import listItems from './createlist.js';

const addItem = document.querySelector('#add-item');

const list = [];
class SaveItem {
  constructor(description, completed = true, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  };

  // method
  addNew() {
    this.description = addItem.value;
    list.push(this);
    this.index = list.length;
    listItems(this);
  }
};

export { list, SaveItem } ;
