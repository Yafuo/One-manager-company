import { Component, OnInit } from '@angular/core';
import {IMPORTBILLS} from '../mock-import-bills';
import {ImportBill} from '../modal';

@Component({
  selector: 'app-import-bill',
  templateUrl: './import-bill.component.html',
  styleUrls: ['./import-bill.component.scss']
})
export class ImportBillComponent implements OnInit {

  importBills = IMPORTBILLS;
  newBill: ImportBill = {
    id: '',
    date: '',
    products: [
      {
        id: '',
        name: '',
        price: '',
        quantity: null
      }
    ]
  };
  isAdd = false;
  // isDone = false;
  // productNo: number;
  constructor() { }

  ngOnInit() {
  }

  onDelete(billId) {
    const isSure = confirm('Are you sure want to delete this ?');
    if (isSure) {
      this.importBills.forEach(item => {
        if (item.id === billId) {
          // console.log(item);
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
    const temp = JSON.parse(JSON.stringify(this.newBill));
    this.importBills.push(temp);
    this.isAdd = false;
    this.newBill.id = '';
    this.newBill.date = '';
    this.newBill.products = [
      {
        id: '',
        name: '',
        price: '',
        quantity: null
      }
    ];
  }

  // createProducts() {
  //   const length = this.productNo;
  //   this.newBill.products = new Array(Number(length)).fill(this.newBill.products);
  //   this.isDone = true;
  // }
}
