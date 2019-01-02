import { Component, OnInit } from '@angular/core';
import {IMPORTBILLS} from '../mock-import-bills';
import {Product} from '../modal';

@Component({
  selector: 'app-import-bill',
  templateUrl: './import-bill.component.html',
  styleUrls: ['./import-bill.component.scss']
})
export class ImportBillComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

  onDelete(billId) {
    const isSure = confirm('Are you sure want to delete this ?');
    if (isSure) {
      this.importBills.forEach(item => {
        if (item.id === billId) {
          const index = this.importBills.indexOf(item);
          this.importBills.splice(index, 1);
        }
      });
    }
  }

  onAddNew() {
    this.isAdd = true;
  }

  onSave() {
    this.isAdd = false;
    // console.log(JSON.parse(JSON.stringify(this.products)));
    this.importBills.push(JSON.parse(JSON.stringify({
      'id': this.billId,
      'date': this.billDate,
      'products': this.products
    })));
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
    console.log(this.products);
    this.isDone = true;
  }
}
