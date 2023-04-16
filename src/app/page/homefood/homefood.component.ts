import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BasketfoodComponent } from '../basketfood/basketfood.component';
import { ItemfoodComponent } from '../itemfood/itemfood.component';
import { OrderfoodComponent } from '../orderfood/orderfood.component';


@Component({
  selector: 'app-homefood',
  templateUrl: './homefood.component.html',
  styleUrls: ['./homefood.component.scss']
})
export class HomefoodComponent {
  constructor(public dialog: MatDialog) {}

  openItem() {
    this.dialog.open(ItemfoodComponent);
  }

  openBasket() {
    this.dialog.open(BasketfoodComponent);
  }

  openOrder() {
    this.dialog.open(OrderfoodComponent);
  }

}


