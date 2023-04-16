import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.scss']
})
export class OrderfoodComponent {
  constructor(private dialogRef : MatDialogRef<OrderfoodComponent>) { }

  close(){
    this.dialogRef.close();
  }

}
