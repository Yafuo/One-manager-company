import { Component, OnInit } from '@angular/core';
import {CUSTOMERS} from '../mock-customers';
import {Customer} from '../modal';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers = CUSTOMERS;
  selectedCustomer: Customer;
  isEditing = false;
  constructor() { }

  ngOnInit() {
    console.log(this.customers);
  }

  onSelectCustomer(customer) {
    this.selectedCustomer = customer;
  }

  onEdit() {
    this.isEditing = true;
  }

  onCancel() {
    this.isEditing = false;
  }

  onDelete(customerId) {
    this.customers.forEach( item => {
      if (item.id === customerId) {
        const index = this.customers.indexOf(item);
        this.customers.splice(index, 1);
      }
    });
  }

  onSave(firstName, lastName, birthDay, gender, address, phoneNo) {
    this.selectedCustomer.firstName = firstName;
    this.selectedCustomer.lastName = lastName;
    this.selectedCustomer.birthDay = birthDay;
    this.selectedCustomer.gender = gender;
    this.selectedCustomer.address = address;
    this.selectedCustomer.phoneNo = phoneNo;
    alert('Your changes have been saved');
    this.isEditing = false;
  }
}
