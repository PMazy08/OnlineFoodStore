import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-itemfood',
  templateUrl: './itemfood.component.html',
  styleUrls: ['./itemfood.component.scss']
})
export class ItemfoodComponent {
  count = 0;
  constructor(private dialogRef : MatDialogRef<ItemfoodComponent>) { }

  increase() {
    this.count++;
  }

  decrease() {
    if(this.count > 0){
      this.count--;
    }
    else{
      this.count = 0;
    }
  }

  close(){
    this.dialogRef.close();
  }


  add(){
    this.dialogRef.close();
  }
}
