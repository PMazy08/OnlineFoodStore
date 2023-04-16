import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderfoodComponent } from '../orderfood/orderfood.component';

@Component({
  selector: 'app-payfood',
  templateUrl: './payfood.component.html',
  styleUrls: ['./payfood.component.scss']
})
export class PayfoodComponent {
  constructor(public dialog: MatDialog,private router: Router) { }

  back(){
    this.router.navigate(['/foodhome']);
  }

  payNow(){
    this.router.navigate(['/foodhome']);
    this.dialog.open(OrderfoodComponent);
  }


}
