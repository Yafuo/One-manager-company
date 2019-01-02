import { Component, OnInit } from '@angular/core';
import {CUSTOMERS} from '../mock-customers';
import {EXPORTBILLS} from '../mock-export-bills';

@Component({
  selector: 'app-export-bill',
  templateUrl: './export-bill.component.html',
  styleUrls: ['./export-bill.component.scss']
})
export class ExportBillComponent implements OnInit {

  customers = CUSTOMERS;
  exportBills = EXPORTBILLS;
  isAdd = false;
  billId = '';
  billDate = '';
  isDone = false;
  productLen: number;
  constructor() { }

  ngOnInit() {
    console.log(this.customers);
  }

  onAddNew() {
    this.isAdd = true;
  }

  onDelete(billId) {
    const isSure = confirm('Are you sure want to delete this ?');
    if (isSure) {
      this.exportBills.forEach(item => {
        if (item.id === billId) {
          const index = this.exportBills.indexOf(item);
          this.exportBills.splice(index, 1);
        }
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
}
