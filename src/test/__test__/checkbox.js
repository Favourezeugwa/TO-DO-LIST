const check = (event, listItem, text) => {
  if (event.target.checked) {
    listItem.completed = true;
    text.style.textDecoration = 'line-through';
  } else {
    listItem.completed = false;
    text.style.textDecoration = 'none';
  }
};

module.exports = { check };