import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  storage = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
