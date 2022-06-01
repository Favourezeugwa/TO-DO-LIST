import _ from 'lodash';
import './style.css';

import listItems from './modules/createlist.js';


const list = [{
  description: 'Read notes',
  completed: false,
  index: 0,
},
{
  description: 'Read notes',
  completed: false,
  index: 1,
},
{
  description: 'Read notes',
  completed: false,
  index: 2,
},
]

list.forEach(listItems);
