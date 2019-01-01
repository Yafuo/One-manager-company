import {Customer} from './modal';

export const CUSTOMERS: Customer[] = [
  {
    id: '1',
    firstName: 'Lee',
    lastName: 'Phan',
    birthDay: '1-1-1990',
    gender: 'Male',
    phoneNo: '012371456',
    address: '2/33 Truong Dinh, Tan Binh',
    bought: [
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
    firstName: 'Amber',
    lastName: 'Nguyen',
    birthDay: '12-10-1991',
    gender: 'Female',
    phoneNo: '08374586',
    address: '42/33 Ho Dac Di, Tan Phu',
    bought: [
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
        quantity: 10
      }
    ]
  },
  {
    id: '3',
    firstName: 'Hannah',
    lastName: 'Luong',
    birthDay: '31-12-1982',
    gender: 'Female',
    phoneNo: '096884477',
    address: '420/102 Tran Cong Dinh, Q3',
    bought: [
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
    firstName: 'Edward',
    lastName: 'La',
    birthDay: '21-3-1997',
    gender: 'Male',
    phoneNo: '09010146',
    address: '20/10 Xo Viet Nghe Tinh, Binh Thanh',
    bought: [
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
    firstName: 'Chris',
    lastName: 'Nguyen',
    birthDay: '17-8-2000',
    gender: 'Male',
    phoneNo: '03354789',
    address: '55/78 Phan Dang Luu, Phu Nhuan',
    bought: [
      {
        id: '104',
        name: 'Intel Core i7 7600',
        price: '350',
        quantity: 1
      }
    ]
  },
];

