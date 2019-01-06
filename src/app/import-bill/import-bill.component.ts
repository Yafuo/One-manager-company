import { Component, OnInit } from '@angular/core';
import {IMPORTBILLS} from '../mock-import-bills';
import {Product} from '../modal';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'app-import-bill',
  templateUrl: './import-bill.component.html',
  styleUrls: ['./import-bill.component.scss']
})
export class ImportBillComponent implements OnInit {

  storage = PRODUCTS;
  importBills = IMPORTBILLS;
  products: Product[];
  empty: Product = {
    id: '',
    name: '',
    quantity: null,
    price: ''
  };
  billId: string;
  billDate: string;
  productLen: number;
  isAdd = false;
  isDone = false;
  isExist = false;
  constructor() { }

  ngOnInit() {
  }

  onDelete(bill) {
    const isSure = confirm('Are you sure want to delete this ?');
    if (isSure) {
      this.importBills.forEach(item => {
        if (item.id === bill.id) {
          const index = this.importBills.indexOf(item);
          this.importBills.splice(index, 1);
        }
      });
      bill.products.forEach( item => {
        this.storage.forEach( product => {
          if (item.id === product.id) {
            product.quantity -= item.quantity;
          }
        });
      });
    }
  }

  onAddNew() {
    this.isAdd = true;
  }

  onSave() {
    this.isAdd = false;
    // console.log(JSON.parse(JSON.stringify(this.products)));
    this.products.forEach( product => {
        let flag = false;
        this.storage.forEach( item => {
          if (item.id === product.id) {
            item.quantity = item.quantity + Number( product.quantity);
            flag = true;
          }
        });
        if (!flag) {
          this.storage.push(JSON.parse(JSON.stringify(product)));
        }
    });

    this.importBills.push(JSON.parse(JSON.stringify({
      'id': this.billId,
      'date': this.billDate,
      'products': this.products
    })));

    // console.log(this.storage);
    this.isDone = false;
    this.billId = '';
    this.billDate = '';
    this.productLen = null;
    this.products = null;
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

  checkProductExist(productId) {
    this.storage.forEach( item => {
      if (item.id === productId) {
        alert('Product ==> ' + item.name + ' <== already exists in the store \nQUANTITY ONLY');
        this.products.forEach( product => {
          if (product.id === productId) {
            product.name = item.name;
            product.price = item.price;
          }
        });
        this.isExist = true;
      }
    });
  }
}
