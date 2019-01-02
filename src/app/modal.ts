export class Customer {
  id: string;
  firstName: string;
  lastName: string;
  birthDay: string;
  gender: string;
  phoneNo: string;
  address: string;
  bought: Product[];
}

export class Product {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

export class Employee {
  id: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDay: string;
  gender: boolean;
  phoneNo: string;
  address: string;
  position: string;
  salary: number;
}

export class ImportBill {
  id: string;
  date: string;
  products: Product[];
}

export class ExportBill {
  id: string;
  date: string;
  customerId: string;
  products: Product[];
}
