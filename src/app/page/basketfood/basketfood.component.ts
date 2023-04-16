import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basketfood',
  templateUrl: './basketfood.component.html',
  styleUrls: ['./basketfood.component.scss']
})
export class BasketfoodComponent {
  constructor(private dialogRef : MatDialogRef<BasketfoodComponent>,private router: Router) { }

  close(){
    this.dialogRef.close();
  }

  order(){
    this.router.navigate(['/pay']);
    this.dialogRef.close();
  }
}
