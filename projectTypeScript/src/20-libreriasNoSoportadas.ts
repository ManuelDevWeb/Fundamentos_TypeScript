// Instalar la libreria npm install lodash, cuando no la soporta typescript ejecutar: npm i --save-dev @types/lodash

import lodash from 'lodash';

const data = [
  {
    username: 'Franco',
    role: 'admin',
  },
  {
    username: 'Valentina',
    role: 'seller',
  },
  {
    username: 'Santiago',
    role: 'customer',
  },
  {
    username: 'zulema',
    role: 'seller',
  },
];

const rta = lodash.groupBy(data, item=>item.role);
console.log(rta);


const a = 1 + '1';

console.log(typeof a);
