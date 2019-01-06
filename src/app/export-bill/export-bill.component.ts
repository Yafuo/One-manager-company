import { Component, OnInit } from '@angular/core';
import {CUSTOMERS} from '../mock-customers';
import {EXPORTBILLS} from '../mock-export-bills';
import {Customer, Product} from '../modal';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'app-export-bill',
  templateUrl: './export-bill.component.html',
  styleUrls: ['./export-bill.component.scss']
})
export class ExportBillComponent implements OnInit {

  storage = PRODUCTS;
  customers = CUSTOMERS;
  exportBills = EXPORTBILLS;
  isBillAdd = false;
  isCustomerAdd = false;
  billId = '';
  billDate = '';
  isDone = false;
  productLen: number;
  customerId = '';
  index: number;
  products: Product[];
  empty: Product = {
    id: '',
    name: '',
    quantity: null,
    price: ''
  };
  emptyCustomer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    birthDay: '',
    gender: '',
    phoneNo: '',
    address: '',
    bought: []
  };
  constructor() { }

  ngOnInit() {
    // console.log(this.customers);
  }

  onAddNew() {
    this.isBillAdd = true;
  }

  onDelete(billId, customerId, billProducts) {
    const isSure = confirm('Are you sure want to delete this ?');
    if (isSure) {
      this.exportBills.forEach(item => {
        if (item.id === billId) {
          const index = this.exportBills.indexOf(item);
          this.exportBills.splice(index, 1);
        }
      });
      this.customers.forEach( item => {
        if (item.id === customerId) {
          // console.log(billProducts[0]);
          item.bought.forEach( (product, index) => {
            if (product.id === billProducts[0].id) {
              this.index = index;
            }
          });
          // const index = item.bought.indexOf(billProducts[0]);
          item.bought.splice(this.index, billProducts.length);
        }
      });
      billProducts.forEach( product => {
        this.storage.forEach( item => {
          if (product.id === item.id) {
            item.quantity +=  Number( product.quantity);
          }
        });
      });
    }
  }

  getFullName(customerId: string): any {
    let fullName = 'Deleted member';
    this.customers.forEach( item => {
      if (item.id === customerId) {
        fullName = item.firstName + ' ' + item.lastName;
      }
    });
    return fullName;
  }

  createProducts() {
    this.products = new Array(Number(this.productLen));
    let i: number;
    for (i = 0; i < this.productLen ; i++) {
      this.products[i] = JSON.parse(JSON.stringify(this.empty));
    }
    // console.log(this.products);
    this.isDone = true;
  }

  onSave() {
    this.isBillAdd = false;
    // console.log(JSON.parse(JSON.stringify(this.products)));
    this.exportBills.push(JSON.parse(JSON.stringify({
      'id': this.billId,
      'date': this.billDate,
      'customerId': this.customerId,
      'products': this.products
    })));
    this.customers.forEach( item => {
      if (item.id === this.customerId) {
        this.products.forEach( product => {
          item.bought.push(JSON.parse(JSON.stringify(product)));
        });
      }
    });
    this.products.forEach( product => {
      this.storage.forEach( item => {
        if (product.id === item.id) {
          item.quantity -=  Number( product.quantity);
        }
      });
    });
    this.isDone = false;
    this.billId = '';
    this.billDate = '';
    this.customerId = '';
    this.productLen = null;
    this.products = null;
  }

  addNewCustomer() {
    this.customers.push(JSON.parse(JSON.stringify({
      id: this.customerId,
      firstName: this.emptyCustomer.firstName,
      lastName: this.emptyCustomer.lastName,
      birthDay: this.emptyCustomer.birthDay,
      gender: this.emptyCustomer.gender,
      phoneNo: this.emptyCustomer.phoneNo,
      address: this.emptyCustomer.address,
      bought: []
    })));
    alert('New customer has been added to database');
    this.isBillAdd = true;
    this.isCustomerAdd = false;
  }

  checkCustomer() {
    let flag = false;
    this.customers.forEach( item => {
      if (item.id === this.customerId) {
        flag = true;
        return;
      }
    });
    if (!flag) {
      alert('This customer does not exist in database yet, please fill information of the customer');
      this.isBillAdd = false;
      this.isCustomerAdd = true;
    }
  }

  checkProductExist(productId) {
    let flag = false;
    this.storage.forEach( item => {
      if (item.id === productId) {
        flag = true;
        alert('You bout to buy ' + item.name + ' with- $' + item.price + 'per item');
        this.products.forEach( product => {
          if (product.id === productId) {
            product.name = item.name;
            product.price = item.price;
          }
        });
      }
    });
    if (!flag) {
      alert('Sorry, we don\'t have this product yet');
      this.products.forEach( product => {
        if (product.id === productId) {
          product.id = null;
        }
      });
    }
  }
}
