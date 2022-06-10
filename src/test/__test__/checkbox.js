const check = (listItem, text, list) => {
  list[listItem.index - 1].completed = !listItem.completed;
  if (listItem.completed) {
    text.style.textDecoration = 'line-through';
  } else {
    text.style.textDecoration = 'none';
  }
};

// delete all checked/completed todos
const clearTodos = (list, toDoList, listItems) => {
  let todos = list.filter((element) => element.completed === false);

  // to update the index
  let i = 1;
  todos = todos.map((element) => {
    element.index = i;
    i += 1;
    return element;
  });
  toDoList.innerHTML = '';
  todos.forEach((listItem, index) => {
    listItems(listItem, (index + 1));
  });
  localStorage.setItem('list', JSON.stringify(todos));
};

export { check, clearTodos };
