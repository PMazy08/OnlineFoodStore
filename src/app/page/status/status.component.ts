import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  constructor(private dialogRef : MatDialogRef<StatusComponent>) { }
  updateStatus(){


    this.dialogRef.close();

  }
}
