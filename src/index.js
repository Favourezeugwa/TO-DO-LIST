import _ from 'lodash';
import './style.css';

import listItems from './modules/createlist.js';

const list = [{
  description: 'Watch movie',
  completed: false,
  index: 0,
},
{
  description: 'Buy groceries',
  completed: false,
  index: 1,
},
{
  description: 'Read a book',
  completed: false,
  index: 2,
},
];

list.forEach(listItems);
