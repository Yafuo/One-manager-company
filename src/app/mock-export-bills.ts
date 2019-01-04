import {ExportBill} from './modal';

export const EXPORTBILLS: ExportBill[] = [
  {
    id: '1',
    date: '12-6-2018',
    customerId: '1',
    products: [
      {
        id: '100',
        name: 'AMD Ryzen 3 2200G',
        price: '99',
        quantity: 1
      },
      {
        id: '105',
        name: 'Mainboard Gygabyte B450M DS3',
        price: '150',
        quantity: 1
      }
    ]
  },
  {
    id: '2',
    date: '22-7-2018',
    customerId: '2',
    products: [
      {
        id: '101',
        name: 'Intel Core i5 7800',
        price: '220',
        quantity: 1
      },
      {
        id: '107',
        name: 'Mainboard Asus H110M Gaming',
        price: '40',
        quantity: 1
      }
    ]
  },
  {
    id: '3',
    date: '9-2-2018',
    customerId: '3',
    products: [
      {
        id: '106',
        name: 'RAM DDR4 2133MHz 4GB GSkill',
        price: '40',
        quantity: 2
      }
    ]
  },
  {
    id: '4',
    date: '25-5-2018',
    customerId: '4',
    products: [
      {
        id: '103',
        name: 'Intel Pentium G4560',
        price: '100',
        quantity: 2
      }
    ]
  },
  {
    id: '5',
    date: '31-10-2018',
    customerId: '5',
    products: [
      {
        id: '104',
        name: 'Intel Core i7 7600',
        price: '350',
        quantity: 1
      }
    ]
  },
];
