import {ImportBill} from './modal';

export const IMPORTBILLS: ImportBill[] = [
  {
    id: '100',
    date: '20-5-2018',
    products: [
      {
        id: '100',
        name: 'AMD Ryzen 3 2200G',
        price: '99',
        quantity: 10
      },
      {
        id: '101',
        name: 'Intel Core i5 7800',
        price: '220',
        quantity: 10
      }
    ]
  },
  {
    id: '101',
    date: '14-6-2018',
    products: [
      {
        id: '102',
        name: 'AMD Athlon 200GE',
        price: '55',
        quantity: 10
      },
      {
        id: '103',
        name: 'Intel Pentium G4560',
        price: '100',
        quantity: 10
      }
    ]
  },
  {
    id: '102',
    date: '10-10-2018',
    products: [
      {
        id: '106',
        name: 'RAM DDR4 2133MHz 4GB GSkill',
        price: '40',
        quantity: 5
      }
    ]
  }
];
